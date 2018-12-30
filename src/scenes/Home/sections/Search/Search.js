import React from 'react';
import ReactDOM from 'react-dom';
import './Search.css';
import search_ico from '../../../../assets/images/search_ico.png';

class Search extends React.Component {

    // placeholderChange() {
    //     var xsize = window.innerWidth;
    //     if (xsize < 762) {
    //         document.getElementsByClassName('ht-search-input')[0].placeholder = '';
    //     } else {
    //         document.getElementsByClassName('ht-search-input')[0].placeholder = '이곳에 집 주소를 입력하시고 나만의 맞춤 이사계획을 세우세요!';
    //     }
    // }

    // componentDidMount() {
    //     window.addEventListener('resize', this.placeholderChange)
    // }

    render() {
        return (
            // <div className="homecontainer">
            <div name="search-panel" className="search-panel">
                <div className="search-contents">
                    <div className="search-top">
                        <p className="white-size-52">이사가 쉬워진다!</p>
                    </div>
                    <div className="search-center">
                        <p><span className="black-size-18">부동산에 매물내놓기, 집 보여주기, 중개사 수수료 계산하기도</span>
                            <span className="blue-size-28">그.만.</span>
                        </p>
                        <p><span className="black-size-18">부족한 정보 탓에 계약을 미루다 좋은 집을 놓친 아쉬움도 이제는</span>
                            <span className="blue-size-28">끝.</span></p>
                    </div>
                    <div className="search-bottom">
                        <div className="search-ico">
                            <img src={search_ico} />
                        </div>
                        <div className="search-input">
                            <input type="text" className="ht-search-input" placeholder="이곳에 집 주소를 입력하시고 나만의 맞춤 이사계획을 세우세요!" />
                        </div>
                        <div className="search-btn">
                            <button type="button" className="hometrader-btn" id="search-button">빠른 견적 받기</button>
                        </div>
                    </div>
                </div>
            </div>
            // </div>
        );
    }
}

export default Search;
