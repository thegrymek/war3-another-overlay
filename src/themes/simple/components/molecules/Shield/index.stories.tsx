import React from 'react';
import {storiesOf} from '@storybook/react';
import Shield from '.';

storiesOf('molecules / Shield', module)
  .add('Human', () => <Shield race="human" />)
  .add('Undead', () => <Shield race="undead" />)
  .add('Orc', () => <Shield race="Orc" />)
  .add('Night Elf', () => <Shield race="nightelf" />)
  .add('Random', () => <Shield race="random" />);
