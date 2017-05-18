import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import Counter from './components/Counter';


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};


render(Counter);



/*****************************************/
// Hot Module Replacement API

// if (module.hot) {
//   module.hot.accept('./components/Counter', () => {
//     render(Counter)
//   });
// }
