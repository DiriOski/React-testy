import brak from './Img/brak.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const kartypodarunkowe = () => {
    return (  

        <div className="Zawartosc">

            <div className="karta">
                <img src={brak} alt="Karta Podarunkowa 1"/>
                <p className="cena">Cena: 100 zł</p>
                <Link to="#" className="kup-button">Kup</Link >
            </div>

            <div className="karta">
                <img src={brak} alt="Karta Podarunkowa 2"/>
                <p className="cena">Cena: 300 zł</p>
                <Link  to="#" className="kup-button">Kup</Link >
            </div>

            <div className="karta">
                <img src={brak} alt="Karta Podarunkowa 3"/>
                <p className="cena">Cena: 1000 zł</p>
                <Link  to="#" className="kup-button">Kup</Link >
            </div>

            <div className="karta">
                <img src={brak} alt="Karta Podarunkowa 4"/>
                <p className="cena">Karta o wybranej wartości</p>
                <Link  to="#" className="kup-button">Kup</Link >
            </div>

            <div className="karta">
                <img src={brak} alt="Karta Subskrypcyjna"/>
                <p className="cena">Allegia Premium</p>
                <p className="cena">Darmowe dostawy oraz rabaty</p>
                <Link  to="#" className="kup-button">Subskrybuj</Link >
            </div>

        

        <div className="opis-kart">
            <h2>Jak działają nasze karty podarunkowe?</h2>
            <p>
                Nasze karty podarunkowe to doskonały sposób na sprawienie radości bliskim. Kupując kartę, możesz
                wybrać spośród różnych dostępnych opcji, w tym standardowych kart o stałej wartości i
                kart, które pozwalają użytkownikowi samodzielnie wybrać wartość, nawet do 10 000 zł.
            </p>
            <p>
                Oprócz tego oferujemy unikalną kartę subskrypcyjną, która otwiera drzwi do wielu korzyści.
                Subskrybuj nas, a otrzymasz dostęp do ekskluzywnych rabatów w wybranych sklepach oraz
                darmowych dostaw przy zakupach online.
            </p>
            <p>
                Wybierz idealną kartę podarunkową już dziś i spraw radość bliskim!
            </p>
        </div>
    </div>
    );
}
 
export default kartypodarunkowe;