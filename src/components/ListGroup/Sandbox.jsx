import React from 'react';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';

const ListSandbox = () => (
  <div>
    <h1>Группированные списки</h1>
    <h2><span>Базовый</span></h2>
    <ListGroup>
      <ListGroupItem>List item 1</ListGroupItem>
      <ListGroupItem>List item 2</ListGroupItem>
      <ListGroupItem>List item 3</ListGroupItem>
      <ListGroupItem>List item 4</ListGroupItem>
    </ListGroup>

    <h2><span>С активными и неактивными элементами</span></h2>
    <ListGroup>
      <ListGroupItem active>List item 1</ListGroupItem>
      <ListGroupItem>List item 2</ListGroupItem>
      <ListGroupItem disabled>List item 3</ListGroupItem>
      <ListGroupItem>List item 4</ListGroupItem>
    </ListGroup>

    <h2><span>С компанентами</span></h2>
    <ListGroup>
      <ListGroupItem>
        List item 1
        <Badge value={2} inline />
      </ListGroupItem>
      <ListGroupItem>
        List item 2
        <Badge value="new" inline />
      </ListGroupItem>
      <ListGroupItem>
        List item 3
        <Badge value={10} warning inline />
      </ListGroupItem>
      <ListGroupItem>
        List item 4
        <Button>Update</Button>
      </ListGroupItem>
    </ListGroup>

    <h2><span>Ссылки</span></h2>
    <ListGroup>
      <ListGroupItem href="/" active>List item 1</ListGroupItem>
      <ListGroupItem href="/">List item 2</ListGroupItem>
      <ListGroupItem href="/">List item 3</ListGroupItem>
      <ListGroupItem href="/">List item 4</ListGroupItem>
    </ListGroup>
  </div>
);

export default ListSandbox;