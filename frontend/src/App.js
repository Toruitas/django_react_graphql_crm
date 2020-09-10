import React, {Suspense} from 'react';
import './App.scss';
import { Navbar } from './features/navbar/Navbar';
import { Switcher } from './Routes';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Suspense fallback={<div>Loading...</div>}>
            <Switcher/>
        </Suspense>

    </div>
  );
}

export default App;