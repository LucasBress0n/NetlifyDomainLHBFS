import "./App.css";
import { NavigationBar } from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ApplicationViews from "./Components/ApplicationViews";

function App() {
  return (
    <>
      <NavigationBar />
      <ApplicationViews />
    </>
  );
}

export default App;
