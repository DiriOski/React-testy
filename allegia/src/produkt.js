const Produkt = () => {
    const [counter, setCounter] = useState(1);

    const increment = () => {
      setCounter((prevCounter) => prevCounter + 1);
    };
  
    const decrement = () => {
      if (counter > 1) {
        setCounter((prevCounter) => prevCounter - 1);
      }
    };
  
    return (
      <div className="product-item">
        <div className="product-image">
          <img className="product-image" src="krzeslo.jpg" alt="Krzesło" />
        </div>
        <div className="product-info">
          <h2 className="product-title">Krzesło</h2>
          <p className="product-description">
            To krzesło to prawdziwa perełka w świecie mebli. Od momentu, gdy na nie spojrzysz, od razu poczujesz jego wyjątkowość. To nie jest zwykłe krzesło, to arcydzieło designu i komfortu, które będzie doskonale pasować do twojego wnętrza i zapewni wyjątkowy relaks.
          </p>
          <div className="product-rating">
            <p className="rating">Ocena 4.9/5</p>
            <p className="rating">23 osób kupiło ten produkt</p>
          </div>
          <div className="product-price">Cena: 75.99 zł</div>
          <div className="input-group">
            <button onClick={decrement}>-</button>
            <input type="number" id="input" value={counter} readOnly />
            <button onClick={increment}>+</button>
          </div>
          <div className="product-actions">
            <button className="add-to-cart">Dodaj do koszyka</button>
            <button className="buy-now">Kup teraz</button>
          </div>
        </div>
      </div>
    );
}
 
export default Produkt;