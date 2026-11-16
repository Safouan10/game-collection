
import { useState } from "react";
import games from "./data/games.json";
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredGames = games.filter((game) => {
    const searchText = search.toLowerCase();

    return (
      game.title.toLowerCase().includes(searchText) ||
      game.genre.toLowerCase().includes(searchText) ||
      game.platform.toLowerCase().includes(searchText) ||
      game.developer.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="container">
      <Header title="🎮 My Game Universe" />

      <section className="intro">
        <h2>Welkom in mijn Game Universe!</h2>
        <p>
          Ontdek mijn favoriete games, bekijk de informatie en zoek
          eenvoudig naar jouw favoriete spel.
        </p>
      </section>

      <input
        type="text"
        className="search-input"
        placeholder="Zoek op titel, genre, platform of developer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p className="game-count">
        {filteredGames.length} games gevonden
      </p>

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
              developer={game.developer}
              multiplayer={game.multiplayer}
              image={game.image}
            />
          ))
        ) : (
          <p className="no-results">Geen games gevonden.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
