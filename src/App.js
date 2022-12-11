import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <nav style={{borderBottom: '1px solid gray'}}>
      <div className="maxpagewidth marginAuto">
        <div className="navmenu marginAuto">
          <div className="mainlogo">
            <a href="#">
              <img src="/images/toss.png" style={{maxWidth: '110px'}}></img>
            </a>
          </div>
          <div style={{display: 'none'}}></div>
          <div className="navbar" style={{float: 'right'}}>
            <ul className="navbar-menu">
              <li className="navbar-menu-item">
                <a href="#">디자인</a>
              </li>
              <li className="navbar-menu-item">
                <a href="#">개발</a>
              </li>
              <li className="navbar-menu-item">
                <a href="#">채용 바로가기</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <section style={{maxWidth: '980px'}} className="marginAuto">
      <div className="mainsection-inner">
        <span style={{display: 'inline-block', fontSize: 'x-large', margin: '40px 0'}}>개발</span>
        <div> 
          <ul className="mainsection">
            <a href="#">
              <img src='/images/blogpostimg.png' alt="" />
              <div>
                <span className="mainsectiontitle">제목1</span>
                <span className="mainsectioncont">내용입니다.</span>
                <span className="mainsectioncdt">2022-12-10</span>
              </div>
            </a>
            <a href="#">
            <img src="/images/blogpostimg.png" alt=""></img>
              <div>
                <span className="mainsectiontitle">제목2</span>
                <span className="mainsectioncont">내용입니다.</span>
                <span className="mainsectioncdt">2022-12-10</span>
              </div>
            </a>
            <a href="#">
            <img src="/images/blogpostimg.png" alt=""></img>
              <div>
                <span className="mainsectiontitle">제목3</span>
                <span className="mainsectioncont">내용입니다.</span>
                <span className="mainsectioncdt">2022-12-10</span>
              </div>
            </a>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div>
        <img src="" alt=""></img>
        <div>
          <h5>하단 섹션 제목</h5>
          <div>
            하단 내용입니다1
            <br></br>
            하단 내용입니다2
            <a href="#">채용중인 공고 보기</a>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div>
        <div>
          <ul>
            <li>
              <div>푸터1-1</div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div>푸터2-1</div>
            </li>
            <li>
              <div>푸터2-2</div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div>푸터3-1</div>
            </li>
            <li>
              <div>푸터3-2</div>
            </li>
          </ul>
        </div>
        <address>
          <strong>(주)우당탕탕리액트대작전</strong>
          "Copyright © Viva Republica, Inc. All Rights Reserved."
        </address>
        <ul>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
  );
}

export default App;
