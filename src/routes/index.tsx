import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loading from "@/components/Loading";
import Page from "@/pages";

function ApplicationRouter(): any {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Page.HomePage />} />
          <Route path="*" element={<Page.NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default ApplicationRouter;
