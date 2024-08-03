import "./App.css";
import Calculator from "./components/Calculator";
import Karma from "./components/Karma";
import Supervisor from "./components/Supervisor";
import TeamBuilder from "./components/TeamBuilder";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <main>
        <Supervisor />
        <div className="card-container">
          <TeamBuilder />
          <Karma />
        </div>

        <Calculator />
      </main>
    </>
  );
}

export default App;
