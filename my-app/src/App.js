
import { createContext, useState } from 'react';
import Counter from './components/Counter';
import Shop from './components/Shop';
import Content from './components/Content';

export let UserContext = createContext()

function App() {
  let [user , setUser] =useState({
    uName:'harivijay',
    age:26,
    email:'abc@gmail.com'
  })
  return (
    <UserContext.Provider value={{user}}>
    <div className="App">
        <Counter/>
        <Shop/>
        <Content/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
