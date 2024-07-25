import { Route, Routes } from "react-router-dom";
import { HomeView } from "./Views/HomeViewFolder/HomeView";

export default function ApplicationViews() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomeView />} />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
}
