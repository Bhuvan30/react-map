import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import MapLayout from "./pages/MapLayout";
import BinsList from "./components/BinsList/BinsList";
import OfficesList from "./components/OfficesList/OfficesList";
import City from "./components/City/City";
import { IconsProvider } from "./contexts/IconsContext";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import SignIn from "./pages/SignUp";

function App() {
  return (
    <AuthProvider>
      <IconsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="mapLayout"
              element={
                <ProtectedRoute>
                  <MapLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="bins" />} />
              <Route path="bins" element={<BinsList />} />
              <Route path="bins/:id" element={<City />} />
              <Route path="offices/:id" element={<City />} />
              <Route path="offices" element={<OfficesList />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </IconsProvider>
    </AuthProvider>
  );
}

export default App;
