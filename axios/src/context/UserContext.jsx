import  { createContext } from "react";

// Step 1: Create the context
export const DataContext = createContext();

// Step 2: Create the provider component
export const DataProvider = ({children}) => {
  const name = "Hello";
  const obj={
    color:"Black",
    price:5000
  }
  return (
    <DataContext.Provider value={{name,obj}}>
      {children}
    </DataContext.Provider>
  );
};

