
import "./App.css";
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <div className="games">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>

        <p>Naam: Safouan</p>
        <p>Studentnummer: 2217279</p>
        <p>Klas: 25B</p>
      </div>

      <div className="game-list">
        <GameCard
          title="Minecraft"
          platform="PC"
        />

        <GameCard
          title="Mario Kart"
          platform="Nintendo Switch"
        />

        <GameCard
          title="Rocket League"
          platform="PlayStation 5"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
