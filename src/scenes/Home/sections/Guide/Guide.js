import React from 'react';
import Panel from './components/Panel/Panel';
import searchhome from './images/search_home.png';
import wallethome from './images/wallet.png';
import movinghome from './images/moving.png';
import './Guide.css';

const panels = [
    {
        id: 1,
        imageUrl: searchhome,
        title1: '나의 집 매매가',
        title2: '확인하기',
        description1: '아파트 주소 입력 후 몇 번의',
        description2: '클릭만으로 집 가격을 확인하세요.'
    },
    {
        id: 2,
        imageUrl: wallethome,
        title1: '홈트레이더에',
        title2: '매매가 제안하기',
        description1: '원하는 매도가가 승인되면',
        description2: '주택관리사가 무료로 방문합니다.'
    },
    {
        id: 3,
        imageUrl: movinghome,
        title1: '이사계획',
        title2: '수립 및 실행',
        description1: '원하는 날짜에 맞춰 이사하시고,',
        description2: '매매대금을 지급받으세요.'
    }
];

class Guide extends React.Component {
    renderPanels(panels) {
        return panels.map(panel => (
            <div key={panel.id} className="col-lg-4 col-md-6">
                {' '}
                <Panel
                    imageUrl={panel.imageUrl}
                    title1={panel.title1}
                    title2={panel.title2}
                    description1={panel.description1}
                    description2={panel.description2}
                />{' '}
            </div>
        ));
    }

    render() {
        return (
            <div className="guide-panel">
                <div className="guide-panel-top">
                    <p className="white-size-28"><span>홈트레이더 이용 가이드</span></p>
                </div>
                <div className="guide-panel-center">
                    <div className="container guide-panel-contents">
                        <div className="row">{this.renderPanels(panels)}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Guide;