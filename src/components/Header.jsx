import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='headerContent'>
        <div className='top'>
          <Link to='/'>CSS PLAY</Link>
        </div>
        <ul className='navBar'>
          <Link to='/buttons' className='navItem'>
            Buttons
          </Link>
          <Link to='/inputs' className='navItem'>
            Inputs
          </Link>
          <Link to='forms' className='navItem'>
            Forms
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
