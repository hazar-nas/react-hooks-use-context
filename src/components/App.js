import React, { useState} from "react";
import { UserProvider } from "../context/user";
import Header from "./Header";
import Profile from "./Profile";


function App() {
  const [theme, setTheme] = useState("dark");
  // const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <UserProvider>
        <Header 
          theme={theme} 
          setTheme={setTheme} 
          // user={user} 
          // setUser={setUser} 
        />
        <Profile
          theme={theme} 
          // user={user} 
        />
      </UserProvider>
    </main>
    
  );
}

export default App;
