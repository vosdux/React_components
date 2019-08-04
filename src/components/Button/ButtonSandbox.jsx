import React from 'react';
import Button from './Button';

const ButtonSandbox = () => (
  <div>
    <h1>Кнопки</h1>
    <h2><span>Текст и функция</span></h2>
    <Button onClick={() => { console.log('!!!!'); }}>Button text</Button>

    <h2><span>Отключенная кнопка</span></h2>
    <Button onClick={() => { console.log('!!!!'); }} disabled />

    <h2><span>Активаня кнопка</span></h2>
    <Button active />

    <h2><span>Прочие аттрибуты в props</span></h2>
    <Button data-name="button" />
    <Button type="submit" />

    <h2><span>Ссылка</span></h2>
    <Button href="test">Link</Button>
    <Button href="test" disabled>Link</Button>
  </div>
);

export default ButtonSandbox;