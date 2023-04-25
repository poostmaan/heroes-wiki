import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/marvel" element={<MarvelPage />}></Route>
        <Route path="/dc" element={<DcPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/hero/:id" element={<HeroPage />}></Route>

        {/* <Route path="/" element={<Navigate to="/marvel" />}></Route>  */} 
      </Routes>
    </>
  );
};
