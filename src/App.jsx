import { useState } from "react";
import Counter from "./pages/Counter";
import Header from "./components/Header";
import UserList from "./pages/UserList";
import SimLoggin from "./pages/SimLoggin";
import { Route, Routes } from "react-router-dom";
import Roles from "./pages/Roles";

function App() {
  const [user, setUser] = useState('');

  return (
    <div className="App">
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/loggin" element={<SimLoggin setUser={setUser} />} />
        <Route path="/roles" element={<Roles setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
