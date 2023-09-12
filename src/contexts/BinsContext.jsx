import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

const BinsContext = createContext();

function BinsProvider({ children }) {
  const [bins, setBins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentBin, setCurrentBin] = useState({});

  useEffect(function () {
    async function fetchBins() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/bins`);
        const data = await res.json();
        setBins(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchBins();
  }, []);

  async function getBin(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/bins/${id}`);
      const data = await res.json();
      setCurrentBin(data);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BinsContext.Provider value={{ bins, isLoading, currentBin, getBin }}>
      {children}
    </BinsContext.Provider>
  );
}

function useBins() {
  const context = useContext(BinsContext);
  if (context === undefined)
    throw new Error("BinsContext was used outside the BinsProvider");
  return context;
}

export { BinsProvider, useBins };
