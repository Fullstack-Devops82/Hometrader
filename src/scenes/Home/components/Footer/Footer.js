import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render() {
    const content1 = '<span class="black-color black-size-12"><span id="h-bar">|</span> 통신판매업 신고번호 제2018-서울강남-0001호</span><br>';
    return (
      <div class="footer-panel">
        <div class="service-panel-contents">
          <div class="footer-top">
            <p class="black-color black-size-14"><a href="#">회사소개</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">위치기반 서비스 이용약관</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">고객센터</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="h-bar">|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">개인정보러리방침</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">홈트레이더 이용약관</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">채용정보</a></p>
          </div>
          <div class="footer-center">
            <p><span class="black-color black-size-12 line-break">(주)홈트레이더 | 대표 김재호 서울특별시 강남구 신사동 508-4 </span>
              <span dangerouslySetInnerHTML={{ __html: content1 }}></span>
              <span class="black-color black-size-12 line-break">사업자 신고번호 제2018-서울강남-0002 서비스 이용문의 xxxx-xxxx </span>
              <span class="black-color black-size-12"><span id="h-bar">|</span> 팩스 02-xxx-xxxx | 이메일
              info@hometrader.co.kr</span></p>
          </div>
          <div class="footer-bottom">
            <p class="black-color black-size-12">Copyright @ Hometrader 2018 All rights reserved</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;