import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Component from '../Mainlayout';

storiesOf('module.Mainlayout', module)
  .add('default view', () => {
    return (
      <Component />
    );
  })
