import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/homepage";
import Pokemon from "../pages/Pokemon";
import PokemonDetail from "../pages/PokemonDetail";
import LoginPage from "../pages/LoginPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Homepage />} />
                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="/pokemon/:id" element={<PokemonDetail />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}