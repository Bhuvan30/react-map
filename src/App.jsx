import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import MapLayout from "./pages/MapLayout";
import BinsList from "./components/BinsList";
import OfficesList from "./components/OfficesList";
import City from "./components/City";
import { BinsProvider } from "./contexts/BinsContext";

function App() {
  return (
    <BinsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="mapLayout" element={<MapLayout />}>
            <Route index element={<Navigate replace to="bins" />} />
            <Route path="bins" element={<BinsList />} />
            <Route path="bins/:id" element={<City />} />
            <Route path="offices" element={<OfficesList />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </BinsProvider>
  );
}

export default App;
