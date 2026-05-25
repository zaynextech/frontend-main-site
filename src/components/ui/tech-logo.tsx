import type { IconType } from "react-icons"; // ⚡ FIX: Imported from root react-icons package
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiExpress, SiNestjs, SiLaravel, SiDjango, SiPostgresql,
  SiMysql, SiMongodb, SiRedis, SiDocker, SiRailway,
  SiVercel, SiCloudinary, SiOpenai,
} from "react-icons/si";

import { Cpu } from "lucide-react";

interface Props {
  name: string;
}

const iconMap: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  Laravel: SiLaravel,
  Django: SiDjango,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Docker: SiDocker,
  Railway: SiRailway,
  Vercel: SiVercel,
  Cloudinary: SiCloudinary,
  OpenAI: SiOpenai,
};

export default function TechLogo({ name }: Props) {
  const Icon = iconMap[name];

  return (
    <div className="group/tech inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-zinc-800 select-none py-0.5 pr-2">
      {/* Minimalistic Editorial Prefix Icon Modifier instead of dark bounding boxes */}
      <span className="text-cyan-600 font-bold tracking-normal transition-transform duration-200 group-hover/tech:scale-110 shrink-0 select-none mr-0.5">
        #
      </span>

      {/* Tiny Responsive Brand Icon Display */}
      {Icon ? (
        <Icon className="text-[12px] text-zinc-500 transition-colors duration-200 group-hover/tech:text-black shrink-0" />
      ) : (
        <Cpu className="h-3 w-3 text-zinc-500 transition-colors duration-200 group-hover/tech:text-black shrink-0 stroke-[2.5]" />
      )}

      {/* High contrast pure typography anchor */}
      <span className="transition-colors duration-200 group-hover/tech:text-[#030303]">
        {name}
      </span>
    </div>
  );
}