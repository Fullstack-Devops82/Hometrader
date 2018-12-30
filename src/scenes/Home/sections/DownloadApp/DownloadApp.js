import React from 'react';
import './DownloadApp.css';
import appl_icon from './images/appl_phone.png';
import appstore_icon from './images/appstore.png';
import googleplay_icon from './images/googleplay.png';

class DownloadApp extends React.Component {

    render() {
        const content1 = '<span class="white-size-16">걸러내고 오직 진실된 실소유자의 피드백을 통해 </span><br>';
        const content2 = '<span class="white-size-16">이젠 홈트레이더를 통해 이사에 대한</span><br>';

        return (
            <div className="app-panel">
                <div className="app-panel-top">
                    <p><span className="yellow-size-32 line-break">홈트레이더 앱을 </span>
                        <span className="yellow-size-32">다운 받으세요!</span></p>
                </div>
                <div className="review-apart-center">
                    <div className="review-apart-letter">
                        <p><span className="white-size-16 line-break">홈트레이더는 광고성 리뷰 및 아파트 정보를 </span>
                            <span dangerouslySetInnerHTML={{ __html: content1 }}></span>
                            <span className="white-size-16 line-break">구매 결정에 필요한 정보들을 제공하고 있습니다. </span>
                            <span dangerouslySetInnerHTML={{ __html: content2 }}></span>
                            <span className="white-size-16 line-break">스테레스 없이원하는 날짜를 지정하여 </span>
                            <span className="white-size-16 line-break">아파트를 사고 팔 수 있는 </span>
                            <span className="white-size-16">국내 최초 e-trading platform입니다.</span></p>
                    </div>
                </div>
                <div className="app-bottom">
                    <div className="app-bottom-left">
                        <img src={appl_icon} alt="" />
                    </div>
                    <div className="app-bottom-right">
                        <div className="app-store-top">
                            <img src={appstore_icon} alt="" />
                        </div>
                        <div className="app-store-bottom">
                            <img src={googleplay_icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DownloadApp;