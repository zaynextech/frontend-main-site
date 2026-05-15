import {
  useEffect,
  useState,
} from "react";

import { toast } from "sonner";
import api from "@/lib/axios";

interface Revision {
  id: string;

  message: string;

  status: string;

  createdAt: string;
}

interface Project {
  id: string;

  projectName: string;
}

const Revisions = () => {

  const [projects, setProjects] =
    useState<Project[]>([]);

  const [projectId, setProjectId] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [revisions, setRevisions] =
    useState<Revision[]>([]);

  /* FETCH PROJECTS */
  useEffect(() => {

    const fetchProjects =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );

         const response = await api.get(
            "/client/projects",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setProjects(
            response.data.projects || []
          );

        } catch (
          error
        ) {

          console.log(error);

        }
      };

    fetchProjects();

  }, []);

  /* FETCH REVISIONS */
  const fetchRevisions =
    async (
      selectedProjectId: string
    ) => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

          const response = await api.get(
            `/revisions/${selectedProjectId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
                  setRevisions(
          response.data.revisions || []
        );

      } catch (
        error
      ) {

        console.log(error);

      }
    };

  /* CREATE */
  const createRevision =
    async () => {

      if (
        !projectId ||
        !message
      ) {
        return;
      }

      try {
        const token =
          localStorage.getItem("token");

        await api.post(
          "/revisions",
          {
            projectId,
            message,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setMessage("");

        fetchRevisions(
          projectId
        );

      } catch (
        error
      ) {

        console.log(error);

        toast.error(
          "Failed to submit revision"
        );

      }
    };

  return (
    <section className="min-h-screen bg-black p-10 text-white">

      <div className="mb-10">

        <h1 className="text-4xl font-black">
          Revision Requests
        </h1>

        <p className="mt-3 text-slate-400">
          Request project changes and track progress
        </p>

      </div>

      {/* CREATE */}
      <div className="rounded-3xl border border-white/5 bg-[#111] p-6">

        <h2 className="mb-6 text-2xl font-bold">
          Submit Revision
        </h2>

        <div className="space-y-4">

          <select
            value={projectId}

            onChange={(e) => {

              setProjectId(
                e.target.value
              );

              fetchRevisions(
                e.target.value
              );
            }}

            className="w-full rounded-2xl border border-white/5 bg-black/20 px-5 py-4 outline-none"
          >

            <option value="">
              Select Project
            </option>

            {projects.map(
              (project) => (

                <option
                  key={project.id}

                  value={project.id}
                >
                  {project.projectName}
                </option>
              )
            )}

          </select>

          <textarea
            placeholder="Describe requested changes..."

            value={message}

            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }

            className="min-h-[150px] w-full rounded-2xl border border-white/5 bg-black/20 px-5 py-4 outline-none"
          />

          <button
            onClick={
              createRevision
            }

            className="rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-black"
          >
            Submit Revision
          </button>

        </div>

      </div>

      {/* LIST */}
      <div className="mt-8 space-y-5">

        {revisions.map(
          (revision) => (

            <div
              key={revision.id}

              className="rounded-3xl border border-white/5 bg-[#111] p-6"
            >

              <div className="flex flex-wrap items-center justify-between gap-5">

                <div>

                  <p className="leading-relaxed text-slate-300">

                    {revision.message}

                  </p>

                  <p className="mt-3 text-xs text-slate-500">

                    {new Date(
                      revision.createdAt
                    ).toLocaleString()}

                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-xs font-semibold

                  ${
                    revision.status ===
                    "RESOLVED"

                      ? "bg-green-500/20 text-green-400"

                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >

                  {revision.status}

                </span>

              </div>

            </div>
          )
        )}

      </div>

    </section>
  );
};

export default Revisions;