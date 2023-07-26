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
            {/* If I move this route up a level then the navigate in DmartNavbar works */}
            <Route path="search" element={<SearchArtworks />} />
            <Route path="category/:category" element={<GroupArtworks/>}></Route>
            <Route path="*" element={<Home/>}></Route>
          </Route>
          
      </Routes>
    </BrowserRouter>
  )
}