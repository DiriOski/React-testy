import ObrMenu from './Img/ObrMenu.png';
import czlek from './Img/czlek.png';
import Koszyk from './Img/Koszyk.png';
import Lupa from './Img/lupa2.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useState } from 'react';

const Menu = () =>{
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Tu możesz wykonać operacje na danych z wyszukiwarki
      console.log('Wyszukano:', searchTerm);
    };
  
    return(
        <nav className="menu">
        <div className="logo">
        </div>
        <div className="menudiv">
            <Link to="#"><img src={ObrMenu} id="obrazMenu" alt='Menu'/></Link> 
            <ul>
                    <li>
                        <Link>Witaj User!<br/> Przeglądaj według kategorii</Link>
                    </li>
                    <li>
                        <Link to="#" >AGD</Link>
                    </li>
                    <li>
                        <Link to="#" >Książki</Link>
                    </li>
                    <li>
                        <Link to="#" >Moda</Link>
                    </li>
                    <li>
                        <Link to="#" >Dom i ogród</Link>
                    </li>
                    <li>
                        <Link to="#" >Zdrowie</Link>
                    </li>
                    <li>
                        <Link to="#" >Motoryzacja</Link>
                    </li>
            </ul>
        </div>
        <Link to="/okazje" >Okazje</Link> 
        <Link to="/licytacje" >Licytacje</Link> 
        <Link to="/karty" >Karty podarunkowe</Link> 
        <Link to="/esklep" >E-Sklepy</Link> 

        <div className="Szukaj">
            <form id="wyszukiwarka" method="get" action="" onSubmit={handleSubmit}>
                <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Wyszukaj"
                />
            </form>
            <button type="submit">
                <img src={Lupa} alt="Lupa" />
            </button>
        </div>

        <div className="menuObrazy">
            <Link to="/koszyk"><img src={Koszyk} id="obrazMenu2" alt='Koszyk'/></Link>
            <Link to="/logowanie"><img src={czlek} id="obrazMenu2" alt='Konto'/></Link> 
        </div>
</nav>
    );
}
export default Menu;