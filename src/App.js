// import "./App.css";
import Home from "./component/Body/Home";
import MyCarousel from "./component/Body/MyCarousel";
import NavigationBar from "./component/Navigation/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MyCarousel />
      <Home />
    </div>
  );
}

export default App;
