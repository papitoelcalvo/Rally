import NavBar from "./Components/NavBar";
import Foother from "./Components/Foother";
import Rally from "./Components/Rally";

export default function Home() {
  return (
    <div className="h-[100vh] overflow-auto">
      <NavBar/>
      <Rally/>
      <Foother/>
    </div>
  );
}
