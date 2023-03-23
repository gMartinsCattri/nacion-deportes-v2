import React, { createContext, useState } from 'react';

export const SportsContext = createContext();

export function SportsProvider(props) {
  const [deporte, setDeporte] = useState(null);

  return (
    <SportsContext.Provider value={{ deporte, setDeporte }}>
      {props.children}
    </SportsContext.Provider>
  );
}
