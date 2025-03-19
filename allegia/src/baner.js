import Prezent from './Img/prezenty.png';

const baner = () => {
    return ( 
        <nav className="baner">
        <div className="przyciskibaner1">
        </div>


        <div className="banerZawartosc">

            <div className="obrazbaner">
                <img src={Prezent} alt="" />
            </div>

        </div>


        <div className="przyciskibaner2">
        </div>

    </nav>
     );
}
 
export default baner;