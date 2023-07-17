import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./Home";
import { Categories } from "./categories/Categories";
import RecentArtworks from "./galleryViews/RecentArtworks";
import SearchArtworks from "./galleryViews/SearchArtworks";
import AllArtworks from "./galleryViews/AllArtworks";
import GroupArtworks from "./galleryViews/GroupArtworks";

export function AppRoutes () {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path="categories" element={<Categories/>}></Route>
                <Route path="all" element={<AllArtworks/>}></Route>
                <Route path="recent" element={<RecentArtworks/>}></Route>
                <Route path="search/:searchTerm" 
                  element={<SearchArtworks key={Math.random()} />} />
                
                <Route path="category/:category" element={<GroupArtworks/>}></Route>
              </Route>
          </Routes>
    </BrowserRouter>
  )
}