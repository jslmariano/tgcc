import { ProductPage } from "@/pages/products/page";
import { ReactElement } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "../theme/provider";
import { AppHeader } from "./header";

export const App = (): ReactElement => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route index element={<ProductPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
