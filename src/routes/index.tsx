import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Page from "@/pages";

function ApplicationRouter(): any {
  return (
    <BrowserRouter basename="/">
      <Suspense>
        <Routes>
          <Route path="/" element={<Page.HomePage />} />
          <Route path="*" element={<Page.NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default ApplicationRouter;
