import React, { useState } from 'react';


const Licytacje = () => {

    const [bidAmount, setBidAmount] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const submitBid = () => {
        // Tutaj możesz obsłużyć złożenie oferty
        console.log('Złożono ofertę:', bidAmount);
        // Dodatkowo, możesz dodać logikę, która obsłuży zamykanie okna popup
        closePopup();
    };
    
            //  const openPopup = () => {
            //     setIsPopupOpen(true);
            //  };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (  

        <main>
    <section className="featured-auctions">
      <div className="auction-item">
        <img src="obrazek1.jpg" alt="Produkt 1"/>
        <h2>Nazwa Produktu 1</h2>
        <p>Aktualna cena: $50</p>
        <button onclick="startAuction(1)">Weź udział w licytacji</button>
      </div>
      <div className="auction-item">
        <img src="obrazek2.jpg" alt="Produkt 2"/>
        <h2>Nazwa Produktu 2</h2>
        <p>Aktualna cena: $80</p>
        <button onclick="startAuction(2)">Weź udział w licytacji</button>
      </div>
      <div className="auction-item">
       <img src="obrazek2.jpg" alt="Produkt 2"/>
       <h2>Nazwa Produktu 3</h2>
       <p>Aktualna cena: $80</p>
       <button>Weź udział w licytacji</button>
      </div>
      <div className="auction-item">
        <img src="obrazek2.jpg" alt="Produkt 2"/>
        <h2>Nazwa Produktu 4</h2>
        <p>Aktualna cena: $80</p>
        <button>Weź udział w licytacji</button>
      </div>
      <div className="auction-item">
        <img src="obrazek2.jpg" alt="Produkt 2"/>
        <h2>Nazwa Produktu 5</h2>
        <p>Aktualna cena: $80</p>
        <button>Weź udział w licytacji</button>
      </div>
      <div className="auction-item">
        <img src="obrazek2.jpg" alt="Produkt 2"/>
        <h2>Nazwa Produktu 6</h2>
        <p>Aktualna cena: $80</p>
        <button>Weź udział w licytacji</button>
      </div>
      <div className="auction-item">
        <img src="obrazek1.jpg" alt="Produkt 1"/>
        <h2>Nazwa Produktu 7</h2>
        <p>Aktualna cena: $50</p>
        <button onclick="startAuction(7)">Weź udział w licytacji</button>
      </div>
      <div className="auction-item">
        <img src="obrazek2.jpg" alt="Produkt 2"/>
        <h2>Nazwa Produktu 8</h2>
        <p>Aktualna cena: $80</p>
        <button onclick="startAuction(8)">Weź udział w licytacji</button>
      </div>
      <div className="auction-item">
       <img src="obrazek2.jpg" alt="Produkt 2"/>
       <h2>Nazwa Produktu 9</h2>
       <p>Aktualna cena: $80</p>
        <button onclick="startAuction(9)">Weź udział w licytacji</button>
      </div>
      <div className="auction-item">
        <img src="obrazek2.jpg" alt="Produkt 2"/>
        <h2>Nazwa Produktu 10</h2>
        <p>Aktualna cena: $80</p>
        <button onclick="startAuction(10)">Weź udział w licytacji</button>
      </div>
     
    </section>

    <div className={`overlay ${isPopupOpen ? 'active' : ''}`} id="overlay">
      <div className="popup" id="popup">
        <h2 id="popup-title">Nazwa Produktu</h2>
        <p id="popup-price">Aktualna cena: $50</p>
        <input
          type="text"
          id="bidAmount"
          placeholder="Podaj swoją ofertę"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
        />
        <button className="buttonl" onClick={submitBid}>
          Złóż ofertę
        </button>
        <button className="buttonl" onClick={closePopup}>
          Zamknij
        </button>
      </div>
    </div>

  </main>

    );
}
 
export default Licytacje;