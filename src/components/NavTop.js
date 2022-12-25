import logo from '../logo.svg';
import tosstechlogo from '../img/tosstech.svg'

function NavBar() {
  return (
    <nav style={{borderBottom: '1px solid rgba(0,27,55,0.1)', height: '60px'}}>
      <div className="maxpagewidth marginAuto">
        <div className="navmenu marginAuto">
          <div className="mainlogo">
            <a href="#">
              <img src={tosstechlogo} class="toss-logo" alt="tosstechlogo" />
            </a>
          </div>
          <div style={{display: 'none'}}></div>
          <div className="navbar">
            <ul className="navbar-menu">
              <li className="navbar-menu-item">
                <a href="#">디자인</a>
              </li>
              <li className="navbar-menu-item">
                <a href="#">개발</a>
              </li>
              <li className="navbar-menu-item">
                <button class="p-button" type="button" aria-disabled="false">채용 바로가기</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
