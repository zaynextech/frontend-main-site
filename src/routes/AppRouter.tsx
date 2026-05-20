import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Industries from "../pages/Industries";
import Portfolio from "../pages/Portfolio";
import PortfolioDetail from "../pages/PortfolioDetail";
import Pricing from "../pages/Pricing";
import Quote from "../pages/Quote";
import Consultation from "../pages/Consultation";
import Contact from "../pages/Contact";

import NotFound from "../pages/NotFound";
import Terms from "@/pages/Terms";
import AgreementPage from "@/pages/AgreementPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import RefundPolicyPage from "@/pages/RefundPolicyPage";
import CosmeticsLandingPage from "@/pages/Demo1";




const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC WEBSITE */}
        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/industries"
            element={<Industries />}
          />

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/portfolio/:slug"
            element={<PortfolioDetail />}
          />

          <Route
            path="/pricing"
            element={<Pricing />}
          />

          <Route
            path="/quote"
            element={<Quote />}
          />

          <Route
            path="/consultation"
            element={<Consultation />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/Privacy"
            element={<PrivacyPolicyPage/>}
            />

            <Route
            path="/terms"
            element={<Terms/>}
            />

            <Route
            path="/Agreement"
            element={<AgreementPage/>}
            />

            <Route
            path="/refund-policy"
            element={<RefundPolicyPage/>}
            />

             <Route
            path="/Demo1"
            element={<CosmeticsLandingPage/>}
            />
        </Route>
      
    


        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;