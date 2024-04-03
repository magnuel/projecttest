import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store'; // Asegúrate de importar tu store correctamente
import AppRoutes from './routes/root';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
