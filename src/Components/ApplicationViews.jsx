import { Route, Routes } from "react-router-dom";
import { HomeView } from "./Views/HomeViewFolder/HomeView";

export default function ApplicationViews() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={"Hello! Landing Page"} />
      </Route>
      <Route path="/home" element={<HomeView />} />
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
}
