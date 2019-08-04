import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => (
    <div className="sidebar">
        <nav className="nav">
            <ul className="menu">
                <li className="menu__item"><NavLink className="menu__link" exact to="/">Главная</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/button">Кнпоки</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/buttongroup">Группы</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/icon">Иконки</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/img">Картинки</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/chip">Кусочки</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/badge">Бейджи</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/group">Группированный списк</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/input">Инпут</NavLink></li>
            </ul>
        </nav>
    </div>
);

export default Navigation