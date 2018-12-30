import React from 'react';
import './Support.css';
import seoul_ico from './images/seoul_city.png';
import global_inspiration from './images/global_inspiration.png';
import kt_sea from './images/kt_sea.png';
import kb_realestate from './images/kb_realestate.png';

class Support extends React.Component {
    render() {
        return (
            <div className="support-panel">
                <div className="container contents">
                    <div className="all">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="seoul-city">
                                    <img src={seoul_ico} alt="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="global-inspiration">
                                    <img src={global_inspiration} alt="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="kt-sea">
                                    <img src={kt_sea} alt="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="kb-realestate">
                                    <img src={kb_realestate} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Support;