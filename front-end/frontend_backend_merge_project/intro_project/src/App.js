import logo from './logo.svg';
import './App.css';
import Register from './register.js'
import MyContextProvider from './contexts/MyContext';

function App() {
  return (
    /*Place Register inside the MyContextProvider to ensure that React doesn't throw
      a null error for when the ,yContext component is initialised in the Register component */
    <MyContextProvider>
    <Register />
    </MyContextProvider>
  );
}

export default App;
