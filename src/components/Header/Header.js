import logo from '../../images/logo.svg';
import './Header.css';


function Header() {

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <img className='header__logo' src={logo} alt='логотип'></img>
        <p className='header__text'>AGENCY</p>
      </div>
    </header>
  );
}

export default Header;