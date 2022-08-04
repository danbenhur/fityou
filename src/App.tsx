import AuthLayout from "./auth/components/AuthLayout";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./shared/components/RequireAuth";
import MainLayout from "./components/MainLayout";

import "./App.css";

function MainRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route />
      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route
        path="/*"
        element={
          <RequireAuth>
            <MainRoutes />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
