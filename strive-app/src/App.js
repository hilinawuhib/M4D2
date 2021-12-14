import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Welcome from "./components/Welcome";
import LatestReleases from "./components/LatestReleases";
import MyFooter from "./components/MyFooter"

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <LatestReleases />
      <MyFooter />

    </div>
  );
}

export default App;
