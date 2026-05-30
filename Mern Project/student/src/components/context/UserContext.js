import { createContext, useContext, useState } from "react";

export const userContext = createContext();

// to get data into another component use this name....
export const useUserContext = () => {
  return useContext(userContext);
};

// AuthCOntext which is call into the app.js (as a conatiner)
export const AuthUserContext = ({ children }) => {
  const [age, setAge] = useState("Gudiya");

  return (
    <>
      <userContext.Provider value={{ age, setAge }}>
        {children}
      </userContext.Provider>
    </>
  );
};
