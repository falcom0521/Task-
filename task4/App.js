import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';  // Import PersistGate
import store, { persistor } from './redux/store';
import Counter from './src/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>  
        <Counter />
      </PersistGate>
    </Provider>
  );
};

export default App;
