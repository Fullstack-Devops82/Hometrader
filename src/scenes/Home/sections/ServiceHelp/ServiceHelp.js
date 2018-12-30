import React from 'react';
import SPanel from './components/SPanel';
import './ServiceHelp.css';
import koreatrading_ico from './images/korea_trading.png';
import service_ico from './images/on_service.png';
import feedback_ico from './images/real_feedback.png';
import property_ico from './images/real_property.png';

const spanels = [
    {
        id: 1,
        imageUrl: property_ico,
        title: 'Real Property',
        desc1: '홈트레이더는 거주자로부터 직접',
        desc2: '아파트를 구입하고, 판매하는 회사입니다.',
        desc3: '직/간접적 광고 및 타인의 아파트 판매 리스팅을',
        desc4: '사용하지 않습니다.'
    },
    {
        id: 2,
        imageUrl: feedback_ico,
        title: 'Real Feedback',
        desc1: '거주가자만이 공유할 수 있는, 아파트 환경',
        desc2: '교통수단, 수리 및 리모델링 내역 등',
        desc3: '정확한 피드백을 공유하고 있습니다.',
        desc4: ''
    },
    {
        id: 3,
        imageUrl: koreatrading_ico,
        title: 'Korea\'s 1st e-Trading',
        desc1: '홈트레이더는 국내 최초로 다지털 매체로서',
        desc2: '아파트 구입 및 판매를 단 몇번의 클릭으로',
        desc3: '이사계획을 원하는 날짜에 맞추어 구입과',
        desc4: '판매를 할 수 있습니다.'
    },
    {
        id: 4,
        imageUrl: service_ico,
        title: 'On & Offline Service',
        desc1: '몇 번의 클릭으로 온라인 견적을 받아 볼 수',
        desc2: '있으며, 오퍼를 수락할 경우 주택관리사와',
        desc3: '홈 어드바이저의 방문으로 일괄적 처리를',
        desc4: '동시에 받아 볼 수 있습니다.'
    }
];

class ServiceHelp extends React.Component {
    renderSPanels(spanels) {
        return spanels.map(spanel => (
            <div key={spanel.id} className="col-lg-6">
                {' '}
                <SPanel
                    imageUrl={spanel.imageUrl}
                    title={spanel.title}
                    desc1={spanel.desc1}
                    desc2={spanel.desc2}
                    desc3={spanel.desc3}
                    desc4={spanel.desc4}
                />{' '}
            </div>
        ));
    }

    render() {
        return (
            <div className="service-panel">
                <div className="service-panel-contents">
                    <div className="service-panel-top">
                        <p><span className="blue-size-32 line-break">여러분의 편한 </span>
                            <span className="blue-size-32">이사를 도웁니다</span></p>
                    </div>
                    <div className="service-panel-center">
                        <div className="service-center-align container">
                            <div className="row">{this.renderSPanels(spanels)}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceHelp;