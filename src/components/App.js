import React from 'react';
import Routes from "./Routes";
import "./App.css";




function App() {
  return(
      <div id="header">
          <h2 className='fan'> F.A.N : Free meeting Active studying  Nice ending </h2>
          <nav className="fl">
              <ul className="main_menu">
                  <li className="">
                      <a href="/home/">홈</a>
                  </li>
                  <li className="">
                      <a href="/board/">게시판</a>
                      <ul className="sub_menu">
                          <li className="">
                              <a href="/board/notice_board/">공지사항 게시판</a>
                          </li>
                          <li className="">
                              <a href="/board/study_board/">스터디 게시판</a>
                          </li>
                          <li className="">
                              <a href="/board/free_board/">자유 게시판</a>
                          </li>
                      </ul>
                  </li>
                  <li className="">
                      <a href="/library/">도서관리시스템</a>
                  </li>
                  <li className="">
                      <a href="/mypage/">마이페이지</a>
                  </li>
              </ul>
          </nav>
          <h3 className='member'>회원 관리</h3>
          <Routes/>
      </div>
  );
}
export default App;