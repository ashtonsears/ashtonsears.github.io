import './Header.css';
import logo from '../images/sleep_logo_img.png';

function Header() {
  return (
    <header>
        <div className="flex-container">
            <section className="col1of2 header_logo">
                <img src={logo} alt="Sleep Tracker Logo"/>
                <h1>Sleep Symptom<br/>Tracker</h1>
            </section>
            <section className="col1of2 login_buttons">
                <button type="button">Log In</button>
                <button type="button">Sign Up</button>
            </section>
        </div>
    </header>
  );
}

export default Header;
