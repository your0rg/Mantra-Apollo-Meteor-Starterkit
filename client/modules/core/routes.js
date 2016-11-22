import React from 'react';

// react mounter
import { mount } from 'react-mounter';


// the layout

import Mainlayout from './components/Mainlayout.jsx';
// import home contqainer

import Home from './containers/Homecontainer.js';

export default function (injectDeps) {

  const MainLayoutCtx = injectDeps(Mainlayout);

  // the home route
  // ==> calling containers and not components
  FlowRouter.route('/', {
    name: 'Home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });
}
