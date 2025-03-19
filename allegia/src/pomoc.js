import React, { useState } from 'react';

const Pomoc = () => {

    const [formData, setFormData] = useState({
        imie: '',
        email: '',
        wiadomosc: '',
      });
    
      // Funkcja obsługująca zmiany w formularzu
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Funkcja obsługująca przesłanie formularza
      const handleSubmit = (e) => {
        e.preventDefault();
        // Tu możesz wykonać operacje na danych formularza
        console.log('Wysłano dane:', formData);
      };
    return ( 
        <nav class="Pomoc">
            <h1>Pomoc</h1>

            <h2>1. Jak złożyć zamówienie:</h2>
            <p>Aby złożyć zamówienie w naszym sklepie, dodaj wybrane produkty do koszyka i postępuj zgodnie z krokiem po kroku w procesie zamówienia. Po dokonaniu płatności, otrzymasz potwierdzenie zamówienia na podany adres e-mail.</p>

            <h2>2. Sposoby płatności:</h2>
            <p>Akceptujemy różne metody płatności, w tym karty kredytowe, przelewy bankowe i płatności online. Zapewniamy bezpieczeństwo transakcji, dzięki czemu możesz z pełnym spokojem dokonywać zakupów.</p>

            <h2>3. Dostawa i śledzenie przesyłki:</h2>
            <p>Informacje dotyczące dostawy znajdziesz na etapie składania zamówienia. Po wysłaniu zamówienia otrzymasz numer śledzenia, dzięki któremu będziesz mógł monitorować status przesyłki.</p>

            <h2>4. Zwroty i reklamacje:</h2>
            <p>Jeśli masz problem z zakupionym produktem, skontaktuj się z naszym działem obsługi klienta. Informacje dotyczące zwrotów i reklamacji znajdziesz w naszym regulaminie.</p>

            <h2>5. Kontakt z obsługą klienta:</h2>
            <p>Nasz zespół obsługi klienta jest gotów pomóc w każdej kwestii. Skontaktuj się z nami poprzez formularz kontaktowy na stronie lub wysłanie e-maila na adres allegia.pomoc@example.com</p>

            <h2>Formularz Zgłoszeniowy</h2>

        <form action="/submit_form" method="post" onSubmit={handleSubmit}>
            <label htmlFor="imie">Imię:</label>
            <input
                type="text"
                id="imie"
                name="imie"
                value={formData.imie}
                onChange={handleInputChange}
                required
            />

            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
            />

            <label htmlFor="wiadomosc">Wiadomość:</label>
            <textarea
                id="wiadomosc"
                name="wiadomosc"
                value={formData.wiadomosc}
                onChange={handleInputChange}
                required
            ></textarea>

            <button type="submit">Wyślij</button>
        </form>
    </nav>
        
     );
}
 
export default Pomoc;