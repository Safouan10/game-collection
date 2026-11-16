
import { useState } from "react";

function GameCard(props) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="game-card">
      {props.image && (
        <img
          src={`/images/${props.image}`}
          alt={`AI-gemaakte poster voor ${props.title}`}
          className="game-image"
        />
      )}

      <h2>{props.title}</h2>

      <div className="game-info">
        <p><strong>Platform:</strong> {props.platform}</p>
        <p><strong>Genre:</strong> {props.genre}</p>
        <p><strong>Beoordeling:</strong> {props.rating}/10</p>
        <p><strong>Jaar:</strong> {props.year}</p>
        <p><strong>Developer:</strong> {props.developer}</p>
        <p><strong>Multiplayer:</strong> {props.multiplayer}</p>
      </div>

      <button
        className="favorite-button"
        onClick={() => setFavorite(!favorite)}
      >
        {favorite ? "❤️ Favoriet" : "🤍 Favoriet"}
      </button>
    </div>
  );
}

export default GameCard;
