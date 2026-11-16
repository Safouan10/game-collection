import { useState } from "react";
import games from "./data/games.json";
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <h2 className="welcome-title">Welkom bij mijn Game Collection!</h2>

      <p className="personal-info">
        Mijn naam: Safouan
        <br />
        Mijn klas: 25b
      </p>

      <input
        type="text"
        className="search-input"
        placeholder="Zoek een game..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="game-list">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
              genre={game.genre}
              rating={game.rating}
              year={game.year}
              image={game.image}
            />
          ))
        ) : (
          <p>Geen games gevonden.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;