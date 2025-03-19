import React, { useState } from 'react';

const Rejestracja = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [postcode, setPostcode] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Tutaj możesz obsłużyć logikę rejestracji, np. wysłać dane do API
      console.log('Dane do wysłania:', {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        birthdate,
        postcode,
        city,
        street,
        houseNumber,
        apartmentNumber,
      });
    };
  
    return (
      <div className="form-container1">
        <div id="register-section" className="form-section active">
          <h2>Zarejestruj się</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><br /><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} pattern=".{6,}" title="Hasło musi mieć co najmniej 6 znaków" placeholder="Hasło" required /><br /><br />
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} pattern="[A-Za-z]+" title="Pole powinno zawierać tylko litery" placeholder="Imię" required /><br /><br />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} pattern="[A-Za-z]+" title="Pole powinno zawierać tylko litery" placeholder="Nazwisko" required /><br /><br />
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} pattern="[0-9]{9}" title="Numer telefonu powinien składać się z 9 cyfr" placeholder="Numer telefonu" required /><br /><br />
            <label htmlFor="data">Wybierz datę:</label><br />
            <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} placeholder="Data urodzenia" required /><br /><br />
            <input type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} pattern="[0-9]{2}-[0-9]{3}" title="Kod pocztowy powinien mieć format XX-XXX" placeholder="Kod pocztowy" required /><br /><br />
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} pattern="[A-Za-z]+" title="Pole powinno zawierać tylko litery" placeholder="Miejscowość" required /><br /><br />
            <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} pattern="[A-Za-z]+" title="Pole powinno zawierać tylko litery" placeholder="Ulica" required /><br /><br />
            <input type="text" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} pattern="[A-Za-z0-9]+" title="Pole powinno zawierać tylko litery i cyfry" placeholder="Nr domu" required /><br /><br />
            <input type="text" value={apartmentNumber} onChange={(e) => setApartmentNumber(e.target.value)} pattern="[A-Za-z0-9]+" title="Pole powinno zawierać tylko litery i cyfry" placeholder="Nr lokalu" required /><br /><br />
            <input type="submit" value="Zarejestruj" />
          </form>
        </div>
      </div>
    );
}
 
export default Rejestracja;