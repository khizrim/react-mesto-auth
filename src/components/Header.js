import logo from '../images/logo.svg';
import { Switch, Route, Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className='header'>
      <div className='header__content'>
        <a href='/' className='header__link' target='_self'>
          <img src={logo} alt='Логотип' className='header__logo' />
        </a>
        <nav className='header__menu'>
          <ul className='header__menu-links'>
            <Switch>
              <Route path='/sign-up'>
                <li className='header__menu-item'>
                  <Link to='/sign-in' className='header__menu-link'>
                    Войти
                  </Link>
                </li>
              </Route>
              <Route path='/sign-in'>
                <li className='header__menu-item'>
                  <Link to='/sign-up' className='header__menu-link'>
                    Регистрация
                  </Link>
                </li>
              </Route>
              {props.isLoggedIn ? (
                <>
                  <li className='header__user-email'>{props.userEmail}</li>
                  <li
                    onClick={props.onSignOut}
                    className='header__menu-link header__menu-link_dimmed'
                  >
                    Выйти
                  </li>
                </>
              ) : (
                ''
              )}
            </Switch>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
