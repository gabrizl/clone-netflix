/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Modal.css"; // Certifique-se de que o CSS está correto

const Modal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          ✖
        </button>
        <div className="modal-header">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="modal-backdrop"
          />
          <div className="modal-header-content">
            <h2 className="modal-title">{movie.title}</h2>
            <p className="modal-description">{movie.overview}</p>
            <button className="modal-play-button">Play</button>
          </div>
        </div>
        <div className="modal-footer">
          <div className="modal-genres">
            <span className="genre">Action</span>
            <span className="genre">Comedy</span>
            {/* Adicione mais gêneros conforme necessário */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
