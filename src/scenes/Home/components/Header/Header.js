import React from 'react';
import './Header.css';
import '../../../../style.css';
import '../../../../assets/fonts/font-awesome/css/font-awesome.min.css';
import '../../../../assets/lib/animate/animate.min.css';
import '../../../../assets/lib/ionicons/css/ionicons.min.css';
import '../../../../assets/lib/owlcarousel/assets/owl.carousel.min.css';
import '../../../../assets/lib/magnific-popup/magnific-popup.css';
import '../../../../assets/lib/ionicons/css/ionicons.min.css';
import logo from '../../../../assets/images/logo.png';

class Header extends React.Component {

    render() {
        return (
            <div className="header-panel">
                <div className="header-contens">
                    <header id="header">
                        <div className="header-pad">
                            <div id="logo" className="pull-left">
                                <a href="#body"><img src={logo} alt="" title="" /></a>
                            </div>
                            <nav id="nav-menu-container">
                                <ul className="nav-menu">
                                    <li><a href="index.html">아파트 내놓기</a></li>
                                    <li><a href="buy_main.html">아파트 구하기</a></li>
                                    <li><a href="#">홈트레이더란?</a></li>
                                    <li><a href="#">서비스소개</a></li>
                                    <li><a href="#">문의하기</a></li>
                                    <li><a href="#">회원가입</a></li>
                                    <li><a href="#">로그인</a></li>
                                </ul>
                            </nav>
                            <div className="clear-both"></div>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default Header;