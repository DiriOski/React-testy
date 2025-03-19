import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const footer = () => {
    return ( 
        <footer>
    <div className="stopka">
        <div className="stopka-item">
            <h3>Kontakt</h3>
            <p>Email: allegia.pomoc@example.com</p>
            <p>Telefon: 123-456-789</p>
            <p>Adres: Opole, ul.Prószkowsa 96, 45-710</p>
        </div>
        <div className="stopka-item">
            <h3>ALLEGIA</h3>
            <Link to="/onas">O nas</Link >
            <Link to="#">Reklama</Link >
            <Link to="#">Mapa strony</Link >
        </div>
        <div className="stopka-item">
            <h3>Centrum Pomocy</h3>
            <Link  to="/pomoc">Pomoc</Link>
            <Link  to="#">Aktualności</Link>
            <Link  to="/regulamin">Regulamin</Link >
        </div>
    </div>
</footer>
     );
}
 
export default footer;
