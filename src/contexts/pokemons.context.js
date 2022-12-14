import { useState, createContext, useEffect } from "react";
import { fetchPokemen, genders } from "../utils/api";
export const PokemonsDataContext = createContext({
  pokemonsData: {},
  setPokemonsData: () => {},
});

export const PokemonsDataProvider = ({ children }) => {
  const [pokemonsData, setPokemonsData] = useState([]);
  useEffect(() => {
    const getPokemen = async () => {
      const data = await fetchPokemen();
      setPokemonsData(data);
    };
    getPokemen();
  }, [genders]);
  const value = { pokemonsData };

  return (
    <PokemonsDataContext.Provider value={value}>
      {children}
    </PokemonsDataContext.Provider>
  );
};
