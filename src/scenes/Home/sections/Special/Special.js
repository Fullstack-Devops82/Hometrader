import React from 'react';
import './Special.css';

class Special extends React.Component {
    render() {
        return (
            <div className="spec-panel">
                <div className="container contents">
                    <div className="ht-spec-panel">
                        <div className="sub-spec-top">
                            <p className="black-color black-size-20 spec-t1">그리고</p>
                            <p className="black-color black-size-20 spec-t2">6억원 아파트 매매시</p>
                            <p className="spec-t3"><span className="blue-size-30">240</span>
                                <span className="black-size-18">만원?</span>
                                <span className="blue-size-30">450</span>
                                <span className="black-size-18 line-break">만원?</span><span className="black-size-16">&nbsp;&nbsp;중개 수수료가 모두 다르다?</span>
                            </p>
                            <p id="sub-buy-fee">
                                <span className="black-size-16">중개 수수료 0원 + 급매걱정 </span>
                                <span className="blue-size-16 line-break">NO + </span>
                                <span className="black-size-16">공동중개로 인한 집방문 스트레스</span>
                                <span className="blue-size-16">NO</span>
                            </p>
                        </div>
                        <div className="sub-spec-bottom">
                            <div className="sub-spec-left">
                                <p><span className="black-size-s1">매매일자 확정</span></p>
                                <p><span className="black-size-s1">잔금일자 확정</span></p>
                                <p><span className="black-size-s1">아파트 보유 리스크</span></p>
                                <p><span className="black-size-s1">공인 중개수수료</span></p>
                            </div>
                            <div className="sub-spec-center">
                                <div className="hr-chart-blue"></div>
                                <div className="hr-chart-blue"></div>
                                <div className="hr-chart-grey"></div>
                                <div className="hr-chart-grey"></div>
                            </div>
                            <div className="sub-spec-right">
                                <p><span className="black-size-s2">온라인 견적 승락후 바로</span></p>
                                <p className="spec-t4"><span className="black-size-s2">최소3일에서 최대 90일까지 원하는날짜</span></p>
                                <p><span className="black-size-s2">원하는 날짜 매매로 급매걱정 끝</span></p>
                                <p><span className="black-size-s2">중개비도 없고, 집보러오는사람도 끝</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Special;