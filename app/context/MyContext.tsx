
"use client"
// context/MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define a type for your context data
interface MyContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with a default value (empty object or default values)
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component with an explicit type for children
interface MyProviderProps {
  children: ReactNode;  // Explicitly define children as ReactNode
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <MyContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
