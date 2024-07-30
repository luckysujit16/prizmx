import React, { Component } from "react";
import ReactDOM from "react-dom";
import Toggle from "react-bootstrap-toggle";
import styles from "../../src/Users/assets/css/p2p.module.css";

export class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = { toggleActive: false };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({ toggleActive: !this.state.toggleActive });
  }

  render() {
    return (
      <form>
        <Toggle
          onClick={this.onToggle}
          on={<p>YES</p>}
          off={<p>NO</p>}
          size="xs"
          offstyle="danger"
          onstyle="success"
          onClassName={styles.toggleOn}
          offClassName={styles.toggleOff}
          active={this.state.toggleActive}
        />
      </form>
    );
  }
}
