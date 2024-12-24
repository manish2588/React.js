import  { createContext } from "react";
export const PracContext = createContext();

export const PracProvider = ({ children }) => {
  const name = "Hello This is context API example";
  const obj1 = {
    color: "Black",
    price: 5000,
  };
  return (
    <PracContext.Provider value={{ name, obj1 }}>
      {children}
    </PracContext.Provider>
  );
};
