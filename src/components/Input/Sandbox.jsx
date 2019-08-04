import React from 'react';
import Input from './Input';

const InputSandbox = () => (
  <div>
    <h1>Поля</h1>
    <h2><span>Текстовое поле</span></h2>
    <Input id="text" type="text" />

    <h2><span>Числовое поле с лейблом</span></h2>
    <Input id="number" label="select number" type="number" />

    <h2><span>Поле пароля с ошибкой</span></h2>
    <Input id="password" error="wrong password" type="password" />

    <h2><span>Поле неделя с лейблом и ошибкой</span></h2>
    <Input id="week" label="week" error="wrong week" type="week" />

    <h2><span>Поле даты (обьязательное)</span></h2>
    <Input id="date" required type="date" />

    <h2><span>Поле файла с лейблом (обязательное)</span></h2>
    <Input id="file" label="file" required type="file" />

    <h2><span>Поле цвета</span></h2>
    <Input id="color" type="color" />

    <h2><span>Ренджовое поле</span></h2>
    <Input id="range" value="80" onChange={() => {}} type="range" />

    <h2><span>Чекбокс</span></h2>
    <Input id="checkbox" checked onChange={() => {}} type="checkbox" />

    <h2><span>Радиокнопка</span></h2>
    <Input id="radio" disabled type="radio" />
  </div>
);

export default InputSandbox;