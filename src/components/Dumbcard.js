import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class DumbCard extends Component {
  render() {
    const { mobile, desktop, children } = this.props;
    const cn = classNames("dumbcard", {
      "is-mobile": mobile,
      "is-desktop": desktop
    });

    return <div className={cn}>{children}</div>;
  }
}

DumbCard.propTypes = {
  mobile: PropTypes.bool,
  desktop: PropTypes.bool,
  children: PropTypes.array
};
