import React from 'react';
import Chip from './Chip';
import Example from './Example';

const ChipSandbox = () => (
  <div>
    <h1>Чипы</h1>
    <h2><span>Чипы с текстом</span></h2>
    <Chip text="User name" />

    <h2><span>Чип с длинным текстом</span></h2>
    <Chip text="Very long chip text should be cropped" />

    <h2><span>Чип с иконкой и кнопкой</span></h2>
    <Chip text="Chip" withIcon />
    <Chip text="Chip" withClose />

    <h2><span>Полный чип</span></h2>
    <Chip text="Full Chip" withIcon withClose />

    <h2><span>Чип с картинкой</span></h2>
    <Chip text="React" withImage imageSrc="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1" imgAlt="react" />

    <h2><span>Чип с действиями</span></h2>
    <Chip
      text="React"
      withImage
      imageSrc="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
      imgAlt="react"
      onChipClick={() => { console.log('clicked on a chip body'); }}
    />
    <Chip
      text="Angular"
      withImage
      imageSrc="https://wishtackblog.files.wordpress.com/2017/03/angular.png?w=748"
      imgAlt="angular"
      onCloseClick={() => { console.log('clicked on a close icon'); }}
      withClose
    />
    <Chip
      text="Vue"
      withImage
      imageSrc="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
      imgAlt="vue"
      onCloseClick={() => { console.log('clicked on a close icon'); }}
      onChipClick={() => { console.log('clicked on a chip body'); }}
      withClose
    />

    <h2><span>Пример использования</span></h2>
    <Example />
  </div>
);

export default ChipSandbox;