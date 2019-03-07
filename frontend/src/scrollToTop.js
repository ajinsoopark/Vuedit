import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
    componentDidUpdate (lastProps) {
        if (this.props.location !== lastProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render () {
        return this.props.children
    }
}

export default withRouter(ScrollToTop)