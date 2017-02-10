import 'purecss/build/pure.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { Layout } from './components';
import stores from './stores';

render(
  <Provider contacts={stores.contacts}>
    <Layout />
  </Provider>,
  document.getElementById('app')
)
