import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import ButtonSandbox from '../../components/Button/ButtonSandbox';
import GroupSandbox from '../../components/ButtonGroup/Sandbox';
import IconSandbox from '../../components/Icon/Sandbox';
import ImgSandbox from '../../components/Img/Sandbox';
import ChipSandbox from '../../components/Chip/Sandbox';
import BadgeSandbox from '../../components/Badge/Sandbox';
import ListSandbox from '../../components/ListGroup/Sandbox';
import InputSandbox from '../../components/Input/Sandbox';

import './Main.css';

const Main = () => (
    <div className="main">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/button" component={ButtonSandbox}/>
            <Route path='/buttongroup' component={GroupSandbox} />
            <Route path='/icon' component={IconSandbox} />
            <Route path='/img' component={ImgSandbox} />
            <Route path='/chip' component={ChipSandbox} />
            <Route path='/badge' component={BadgeSandbox} />
            <Route path='/group' component={ListSandbox} />
            <Route path='/input' component={InputSandbox} />
        </Switch>
    </div>
);

export default Main;

