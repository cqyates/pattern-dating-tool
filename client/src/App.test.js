import React from 'react';
import ReactDOM from 'react-dom';
import TesseractApp from '../src/Components/TesseractApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TesseractApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
