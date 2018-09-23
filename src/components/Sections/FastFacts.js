import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Sentinel from "react-sentinel";

import DumbCard from "../Dumbcard";

const MobileContent = () => (
  <Fragment>
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td className="has-background-black has-padding-3">
            <div className="h3 is-primary">Fast facts</div>
          </td>
        </tr>
        <tr>
          <td className="has-padding-3">
            <ul>
              <li>Frontend developer, graphic designer based in Manila</li>
              <li>Registered pharmacist (2018)</li>
              <li>
                Fluent in <b>HTML</b>, <b>CSS</b>, and currently learning{" "}
                <b>React</b> and <b>JavaScript</b>
              </li>
              <li>
                Part of the Women Who Code Manila community *heart-eyes emoji*
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
);

const DesktopContent = () => (
  <Fragment>
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td className="has-background-black has-padding-5">
            <div className="h3 is-primary">Fast facts</div>
          </td>
        </tr>
        <tr>
          <td className="has-padding-5">
            <ul>
              <li>Frontend developer, graphic designer based in Manila</li>
              <li>Registered pharmacist (2018)</li>
              <li>
                Fluent in <b>HTML</b>, <b>CSS</b>, and currently learning{" "}
                <b>React</b> and <b>JavaScript</b>
              </li>
              <li>
                Part of the Women Who Code Manila community *heart-eyes emoji*
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
);

export default class FastFacts extends Component {
  getSize = () => {
    const width = this.container.offsetWidth;
    if (width <= 400) {
      return {
        desktop: false,
        mobile: true,
        width
      };
    }

    return { desktop: true, mobile: false, width };
  };

  renderFastFacts = ({ mobile, desktop, width }) => (
    <DumbCard mobile={mobile} desktop={desktop}>
      {mobile && <MobileContent width={width} />}
      {desktop && <DesktopContent width={width} />}
    </DumbCard>
  );

  render() {
    return (
      <div className="fastfacts" ref={el => (this.container = el)}>
        <Sentinel observe={this.getSize} render={this.renderFastFacts} />
      </div>
    );
  }
}

FastFacts.propTypes = {
  mobile: PropTypes.bool,
  desktop: PropTypes.bool,
  children: PropTypes.object
};
