import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

class Panel extends React.Component {
    render() {
        const { imageUrl, title1, title2, description1, description2 } = this.props;
        return (
            <div className="guide-small-panel">
                <div className="check-selling-img">
                    <img src={imageUrl} />
                </div>
                <div className="check-selling-title">
                    <p className="blue-size-18">{title1}</p>
                    <p className="blue-size-18 title2">{title2}</p>
                </div>
                <div className="check-selling-contents">
                    <p className="black-color black-size-16">{description1}</p>
                    <p className="black-color black-size-16 desc2">{description2}</p>
                </div>
            </div>
        );
    }
}

Panel.propTypes = {
    imageUrl: PropTypes.string,
    title1: PropTypes.string,
    title2: PropTypes.string,
    description1: PropTypes.string,
    description2: PropTypes.string
};

export default Panel;