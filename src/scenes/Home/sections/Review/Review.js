import React from 'react';
import HButton from '../../components/HButton/HButton';
import './Review.css';
import bg_img from './images/review_3.png';

const hbutton = {
    title: '더 많은 리뷰 보기',
    visitUrl: ''
};

class Review extends React.Component {
    renderHButton(hbutton) {
        return (<HButton title={hbutton.title} visitUrl={hbutton.visitUrl} />);
    }

    render() {
        const content1 = '<span class="black-size-16">내가 원하는 집을 고르는데시간이 걸려요.</span><br>';

        const content2 = '<span class="black-size-16">수차례 보다 보면 시간이 아깝게 느껴질 거예요.</span><br>';

        const content3 = '<span class="black-size-16">진솔한 피드백을 사전에 확인해보세요.</span><br>';

        return (
            <div className="review-panel">
                <div className="review-panel-top">
                    <div className="review-apart-top">
                        <p><span className="blue-size-32 line-break">살아본 사람들이 </span>
                            <span className="blue-size-32">알려주는 아파트 리뷰</span></p>
                    </div>
                    <div className="review-apart-center">
                        <div id="review-comments">
                            <p><span className="black-size-16 line-break">부동산 사무실을 통해서는 </span>
                                <span dangerouslySetInnerHTML={{ __html: content1 }}></span>
                                <span className="black-size-16 line-break">헛걸음칠 수도 있고 마음이 가지 않는 집을 </span>
                                <span dangerouslySetInnerHTML={{ __html: content2 }}></span>
                                <span className="black-size-16 line-break">홈트레이더를 통해 살아본 사람들의 </span>
                                <span dangerouslySetInnerHTML={{ __html: content3 }}></span>
                                <span className="black-size-16 line-break">모든 정보는 홈트레이더가 다시 한 번 검증한 </span>
                                <span className="black-size-16">신뢰할 수있는 안전한 정보입니다.</span></p>

                            <p><span className="black-size-16 line-break">정확한 정보를 통해 시간절약의 </span>
                                <span className="black-size-16">기회와 믿음을 체험해 보세요!</span></p>
                        </div>
                        <div className="review-apart-more">
                            {this.renderHButton(hbutton)}
                            {/* <button type="button" className="hometrader-btn">더 많은 리뷰 보기</button> */}
                        </div>
                    </div>
                    <div className="review-apart-bottom">
                        <div className="review-apart-img">
                            <img src={bg_img} alt="review" />
                        </div>
                    </div>
                </div>
                <div className="review-panel-bottom">
                </div>
            </div>
        );
    }
}

export default Review;