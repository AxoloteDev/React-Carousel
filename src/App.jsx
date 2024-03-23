import Carousel from "./components/Carousel.jsx";
import { slides } from "./data/images.json";
import "./styles/App.css";

function App() {
  return <Carousel data={slides} />;
}

export default App;
