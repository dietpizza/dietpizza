import { Route, Routes } from "react-router";
import { HomePage } from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
