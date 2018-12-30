import React from 'react';
import HButton from '../../components/HButton/HButton';
import './Consult.css';
import consult_img from './images/online_consult.png';

const hbutton = {
    title: '온라인 상담하기',
    visitUrl: ''
};

class Consult extends React.Component {
    renderHButton(hbutton) {
        return (<HButton title={hbutton.title} visitUrl={hbutton.visitUrl} />);
    }

    render() {
        return (
            <div className="consult-panel">
                <div className="container">
                    <div className="row">
                        <div className="consult-message col-lg-1 col-md-1">
                            <img src={consult_img} />
                        </div>
                        <div className="consult-letter col-lg-7 col-md-6">
                            <p><span className="blue-size-32 line-break large1">어떤 집을 찾고 </span>
                                <span className="blue-size-32 large1">계신가요?</span></p>
                            <p id="p-add"><span className="black-size-18 line-break small1">원하시는 집을 찾는데 어려움이</span>
                                <span className="black-size-18 small1">있으면 언제든 문의해주세요.</span></p>
                        </div>
                        <div className="consult-button col-lg-4 col-md-6">
                            {this.renderHButton(hbutton)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Consult;