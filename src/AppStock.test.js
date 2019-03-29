import React from 'react';
import ReactDOM from 'react-dom';
import AppStock from './AppStock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppStock />, div);
  ReactDOM.unmountComponentAtNode(div);
});
