import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import GeneratorPage from "./pages/GeneratorPage";
import HistoryPage from "./pages/HistoryPage";

export default function App() {
  const { dark, toggle } = useTheme();
  const [page, setPage] = useState("landing");
  const [preloaded, setPreloaded] = useState(null); // for loading history entry

  const loadResult = (entry) => setPreloaded(entry);

  return (
    <>
      {page !== "landing" && (
        <Navbar dark={dark} toggleDark={toggle} page={page} setPage={setPage} />
      )}
      {page === "landing" && (
        <LandingPage dark={dark} toggleDark={toggle} setPage={setPage} />
      )}
      {page === "generator" && (
        <GeneratorPage dark={dark} preloaded={preloaded} clearPreloaded={() => setPreloaded(null)} />
      )}
      {page === "history" && (
        <HistoryPage dark={dark} setPage={setPage} loadResult={loadResult} />
      )}
    </>
  );
}
