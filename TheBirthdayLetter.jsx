import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p style={{ lineHeight: '1.5', marginBottom: '15px' }}>
        Salut, joyeux anniversaire, mon cœur !!!
      </p>
      
      <p style={{ lineHeight: '1.5', marginBottom: '15px' }}>
        Tu viens de franchir un nouveau chapitre de ta vie ! Je sais que tu peux y arriver et je crois en toi. 
        Tu l'as fait !!! S'il te plaît, reste en vie :D Il faut qu'on se retrouve et qu'on fête ton anniversaire 
        ensemble, en personne hihi :DD
      </p>
      
      <p style={{ lineHeight: '1.5' }}>
        Encore une fois, je te souhaite de profiter pleinement de ce nouveau chapitre de ta vie, 
        et j'espère que le bonheur t'accompagnera à chaque seconde.
      </p>
                    <p style={{ textAlign: "right" }}>bisous,</p>
                    <p style={{ textAlign: "right" }}>cat</p>
                </div>
            </div>

            <div className="title">
                <p>ta réaction?</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("thanks-letter.png")}>
                    <img src="letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">merci</span>
                </button>
                <button className="img-button" onClick={() => openPopup("sorry-letter.png")}>
                    <img src="letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">désolé</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("happy-letter.png")}>
                    <img src="letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">heureux</span>
                </button>
                <button className="img-button" onClick={() => openPopup("sad-letter.png")}>
                    <img src="letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">triste</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                C'est tous!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
