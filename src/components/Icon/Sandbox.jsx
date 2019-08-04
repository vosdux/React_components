import React from 'react';
import Icon from './Icon';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';

const IconSandbox = () => (
  <div>
    <h1>Иконки fontAwesome</h1>
    <h2><span>Обычная иконка</span></h2>
    <Icon size={2} onClick={() => { console.log('!!!'); }} name="atom" />

    <h2><span>Иконки в ButtonGroup</span></h2>
    <ButtonGroup>
      <Button active>
        <Icon name="align-right" />
      </Button>
      <Button>
        <Icon name="align-center" />
      </Button>
      <Button>
        <Icon name="align-left" />
      </Button>
      <Button>
        <Icon name="align-justify" />
      </Button>
    </ButtonGroup>

    <h2><span>Иконка с размером 8rem</span></h2>
    <Icon title="badge" size={8} name="award" />

    <h2><span>Отключенная иконка</span></h2>
    <Icon size={2} disabled onClick={() => { console.log('!!!'); }} name="atom" />
  </div>
);

export default IconSandbox;