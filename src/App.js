import './App.css';
import NavTop from './components/NavTop.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
    <NavTop></NavTop>
    <section style={{maxWidth: '980px', marginBottom: '192px'}} className="marginAuto">
      <div className="mainsection-inner">
        <span class="menu-title" >개발</span>
        <div> 
          <ul className="mainsection">
            <a class="mainserctionlink" href="#">
              <img class="hover-img" src='/images/blogpostimg.png' alt="" />
              <div>
                <span class="hover-span" className="mainsectiontitle">토스증권 QA 문화 ‘통합테스트’를 아시나요? (feat. 해외주식)</span>
                <span className="mainsectioncont">토스증권 해외주식 출시 전에 사내 임직원 대상으로 진행한 ‘통합테스트’에 대해 소개합니다. 통합테스트 진행 방식을 참고하여 간단한 규칙과 사용자 시나리오를 활용해 사용자의 반응을 미리 확인해 보세요.</span>
                <span className="mainsectioncdt">2022. 12. 12</span>
              </div>
            </a>
            <a class="mainserctionlink" href="#">
            <img class="hover-img" src='/images/blogpostimg.png' alt="" />
              <div>
                <span className="mainsectiontitle">제목2</span>
                <span className="mainsectioncont">내용입니다.</span>
                <span className="mainsectioncdt">2022-12-10</span>
              </div>
            </a>
            <a class="mainserctionlink" href="#">
            <img class="hover-img" src='/images/blogpostimg.png' alt="" />
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
    <section class="subsection">
      <div class="subsection-img-wrap">
        <img src="./images/website_code_blue_alpha.png" alt="" class="subsection-img"></img>
        <div>
          <h5 class="subsection-title">하단 섹션 제목</h5>
          <div class="subsection-cont">
            하단 내용입니다1
            <br></br>
            하단 내용입니다2
          </div>
          <a href="#" class="p-button subsection-link">채용중인 공고 보기</a>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
  );
}

export default App;
