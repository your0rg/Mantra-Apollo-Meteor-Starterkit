import React from 'react';
import { mount } from 'react-mounter';


// the layout

import Mainlayout from './components/Mainlayout.jsx';
// import home

import Home from './containers/Homecontainer.js';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(Mainlayout);

  // Move these as a module and call this from a main file
  FlowRouter.route('/', {
    name: 'Home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });
}
