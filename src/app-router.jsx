import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { AboutPage } from "./pages/about-page";
import { AppLayout } from "./components/app-layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={AppLayout}>
          <Route index Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
