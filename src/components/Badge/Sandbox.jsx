import React from 'react';
import Badge from './Badge';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const BadgeSandbox = () => (
  <div>
    <h1>Бейджы</h1>
    <h2><span>Бейджы с текстом</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="envelope" />
      <Badge value="new" />
    </Button>
    <Button>
      <Icon name="envelope" />
      <Badge circle value="new" />
    </Button>

    <h2><span>Нумерованные бейджи</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="comment" />
      <Badge value={2} />
    </Button>
    <Button>
      <Icon name="comment-dots" />
      <Badge circle value={12} />
    </Button>

    <h2><span>Инлайновые бейджи</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="phone" />
      <Badge inline value={1} />
    </Button>
    <Button>
      <Icon name="phone" />
      <Badge inline value="1 missed" />
    </Button>

    <h2><span>Остальные бейджи</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="bell" />
      <Badge outer value={1} />
    </Button>
    <Button>
      <Icon name="wifi" />
      <Badge outer warning value={1} />
    </Button>

    <h2><span>Warning, Alert, Success, Info</span></h2>
    <Button style={{ marginRight: '20px', marginBottom: '20px' }}>
      <Icon name="bullhorn" />
      <Badge circle warning value={1} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="inbox" />
      <Badge circle alert value={1} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="paper-plane" />
      <Badge circle success value={1} />
    </Button>
    <Button>
      <Icon name="rss" />
      <Badge circle info value={1} />
    </Button>
    <br />
    <Button style={{ marginRight: '20px' }}>
      <Icon name="bullhorn" />
      <Badge warning value={1} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="inbox" />
      <Badge alert value={1} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="paper-plane" />
      <Badge success value={1} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="rss" />
      <Badge info value={1} />
    </Button>
  </div>
);

export default BadgeSandbox;