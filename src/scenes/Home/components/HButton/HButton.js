import React from 'react';
import PropTypes from 'prop-types';
import './HButton.css';

class HButton extends React.Component {
    render() {
        const { title, visitUrl } = this.props;
        return (
            <div>
                <a className="white-size-18 btn-middle" href="#">{title}</a>
            </div>
        );
    }
}

HButton.propTypes = {
    title: PropTypes.string,
    visitUrl: PropTypes.string
};

export default HButton;