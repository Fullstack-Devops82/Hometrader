import React from 'react';
import PropTypes from 'prop-types';
import './SPanel.css';

class SPanel extends React.Component {
    render() {
        const { imageUrl, title, desc1, desc2, desc3, desc4 } = this.props;
        return (
            <div className="service-center-panel">
                <div className="service-icon-left">
                    <img src={imageUrl} />
                </div>
                <div className="service-icon-right">
                    <div>
                        <p className="black-color black-size-20">{title}</p>
                    </div>
                    <div className="service-icon-right-two">
                        <p className="black-size-s1">{desc1}</p>
                        <p className="black-size-s1">{desc2}</p>
                        <p className="black-size-s1">{desc3}</p>
                        <p className="black-size-s1">{desc4}</p>
                    </div>
                </div>
            </div>
        );
    }
}

SPanel.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    desc1: PropTypes.string,
    desc2: PropTypes.string,
    desc3: PropTypes.string,
    desc4: PropTypes.string
}

export default SPanel;