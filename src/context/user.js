import React,{useState} from 'react'

// create the context
const UserContext = React.createContext();

function UserProvider({children}){
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("dark");

 
  return (
    <UserContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
}

export {UserContext, UserProvider}