import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

class GroupSandbox extends Component {
  state = {
    switchOn: true,
  }

  handleSwitchOn = () => {
    this.setState({ switchOn: true });
  }

  handleSwitchOff = () => {
    this.setState({ switchOn: false });
  }

  render() {
    const { switchOn } = this.state;

    return (
      <div>
        <h1>Группы кнопок</h1>
        <h2><span>Горизонтальная группа кнопок</span></h2>
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>

        <h2><span>Вертикальная группа кнопок</span></h2>
        <ButtonGroup vertical>
          <Button>First</Button>
          <Button active>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>

        <h2><span>Переключатель</span></h2>
        <ButtonGroup>
          <Button onClick={this.handleSwitchOn} active={switchOn}>ON</Button>
          <Button onClick={this.handleSwitchOff} active={!switchOn}>OFF</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default GroupSandbox;