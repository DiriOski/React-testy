const Logowanie = () => {
    return ( 
        <div className="logowanie">
        <p className="container1">Masz konto? Zaloguj się!</p>
  
        <div className="form-container">
          <div id="login-section" className="form-section active">
            <h2>Zaloguj się</h2>
            <form action="login.php" method="post">
              <input type="email" name="email" placeholder="Email" required /><br /><br />
              <input type="password" name="password" placeholder="Hasło" required /><br /><br />
              <input type="submit" value="Zaloguj" />
            </form>
          </div>
        </div>
  
        <hr className="vertical-line" />
  
        <p className="container2">Nie masz konta? Zarejestruj się!</p>
        <buttonz1 className="buttonz1" onClick={() => window.location.href = '/rejestracja'}>
          Zarejestruj się
        </buttonz1>
      </div>
     );
}
 
export default Logowanie;