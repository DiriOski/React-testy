import React, { useState } from 'react';

const Koszyk = () => {
    const [quantity, setQuantity] = useState(1);
    const pricePerItem = 22.99;
  
    const changeQuantity = (amount) => {
      setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };
  
    const updateTotal = () => {
      return quantity * pricePerItem;
    };
  
    const clearCart = () => {
      setQuantity(0);
      alert('Koszyk został wyczyszczony.');
    };
  
    const continueShopping = () => {
      window.location.href = '/';
    };
  
    const submitForm = () => {
      // Tutaj dodaj logikę obsługi formularza
      console.log('Formularz został złożony!');
    };
  
    return (
      <>
        <div className="product-container">
          <div className="product-image">
            <img src="kubek.jpg" alt="Nazwa produktu" />
          </div>
          <div className="description">
            <p>Kubek</p>
          </div>
          <div className="controls">
            <button onClick={() => changeQuantity(-1)}>-</button>
            <span id="quantity">{quantity}</span>
            <button onClick={() => changeQuantity(1)}>+</button>
          </div>
          <div className="price">
            <p>Cena: <span id="price">{pricePerItem.toFixed(2)}</span> zł</p>
          </div>
          <div className="cart-buttons">
            <button onClick={clearCart}>Wyczyść koszyk</button>
          </div>
          <div className="summary">
            <p id="suma">Suma: <span id="total">{updateTotal().toFixed(2)}</span> zł</p>
            <button onClick={continueShopping}>Kontynuuj zakupy</button>
          </div>
        </div>
  
        <div className="checkout-container">
          <h2>Formularz dostawy i płatności</h2>
          <form id="checkout-form">
            <label htmlFor="name">Imię i nazwisko:</label>
            <input type="text" id="name" name="name" required /><br />
  
            <label htmlFor="miejscowosc">Miejscowość:</label>
            <input type="text" id="miejscowosc" name="address" required /><br />
  
            <label htmlFor="nrdom">Numer domu/lokalu:</label>
            <input type="text" id="nrdom" name="address" required /><br />
  
            <label htmlFor="email">Adres email:</label>
            <input type="email" id="email" name="email" required /><br />
  
            <label htmlFor="payment-method">Metoda płatności:</label>
            <select id="payment-method" name="payment-method" required>
              <option value="karta">Karta kredytowa</option>
              <option value="przelew">Przelew bankowy</option>
              <option value="gotowka">Gotówka przy odbiorze</option>
            </select><br />
  
            <button onClick={submitForm}>Złóż zamówienie</button>
          </form>
        </div>
      </>
    );
  };
 
export default Koszyk;