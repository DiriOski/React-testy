import Amica from './Img/amica_logo.png';
import Goplana from './Img/goplana_logo.png';
import Nike from './Img/nike_logo.png';
import Elektrolux from './Img/electrolux_logo.png';
import Strzalka1 from './Img/Strzalka.png';
import Strzalka2 from './Img/Strzalka2.png';


const esklep = () => {
    return ( 
        
        <div className="sklepy">
        <div className="sklep">
            <button className="przycisk-lewy"><img src={Strzalka1} alt="Poprzedni"/></button>

            <div className="logo2">
                <img src={Goplana} alt="Logo Goplana"/>
            </div>

            <div className="propozycje-produktow">
                <div className="produkt"><p>Produkt 1</p></div>
                <div className="produkt"><p>Produkt 2</p></div>
                <div className="produkt"><p>Produkt 3</p></div>
                <div className="produkt"><p>Produkt 4</p></div>
            </div>

            <button className="przycisk-prawy"><img src={Strzalka2} alt="Następny"/></button>
        </div>

        <div className="sklep">
        <button className="przycisk-lewy"><img src={Strzalka1} alt="Poprzedni"/></button>

            <div className="logo2">
                <img src={Nike} alt="Logo Nike"/>
            </div>

            <div className="propozycje-produktow">
                <div className="produkt"><p>Produkt 1</p></div>
                <div className="produkt"><p>Produkt 2</p></div>
                <div className="produkt"><p>Produkt 3</p></div>
                <div className="produkt"><p>Produkt 4</p></div>
            </div>
            <button className="przycisk-prawy"><img src={Strzalka2} alt="Następny"/></button>
        </div>

        <div className="sklep">
        <button className="przycisk-lewy"><img src={Strzalka1} alt="Poprzedni"/></button>

            <div className="logo2">
                <img src={Amica}alt="Logo Amica"/>
            </div>

            <div className="propozycje-produktow">
                <div className="produkt"><p>Produkt 1</p></div>
                <div className="produkt"><p>Produkt 2</p></div>
                <div className="produkt"><p>Produkt 3</p></div>
                <div className="produkt"><p>Produkt 4</p></div>
            </div>
            <button className="przycisk-prawy"><img src={Strzalka2} alt="Następny"/></button>
        </div>

        <div className="sklep">
        <button className="przycisk-lewy"><img src={Strzalka1} alt="Poprzedni"/></button>

            <div className="logo2">
                <img src={Elektrolux} alt="Logo Electrolux"/>
            </div>
            <div className="propozycje-produktow">
                <div className="produkt"><p>Produkt 1</p></div>
                <div className="produkt"><p>Produkt 2</p></div>
                <div className="produkt"><p>Produkt 3</p></div>
                <div className="produkt"><p>Produkt 4</p></div>
            </div>
            <button className="przycisk-prawy"><img src={Strzalka2} alt="Następny"/></button>
        </div>
    </div>
     );
}
 
export default esklep;