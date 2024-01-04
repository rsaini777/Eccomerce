import React from 'react';
import AppRoutes from './routes/Routes';
import Nav from './components/header/Nav';

function App() {
  return (
    <div>
      <header>
       <Nav />
      </header>
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
