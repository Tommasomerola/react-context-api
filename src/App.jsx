// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// importiamo GlobalContext
import GlobalContext from "./context/GlobalContext";

// gestione listato post
import { useState, useEffect } from "react";
import axios from "axios";


// Pages
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import PostListPage from "./pages/PostListPage"
import PostCreatePage from "./pages/PostCreatePage"
import PostDetailPage from "./pages/PostDetailPage"

function App() {


  return (
    <>
         <BrowserRouter>
      <Routes>
        {/* DefaultLayout viene utilizzato come layout di default per le rotte */}
        <Route element={<DefaultLayout />}>
          {/* Definizione delle rotte */}
          <Route path="/" element={<HomePage />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/posts">
            <Route index element={<PostListPage />} />
            <Route path="create" element={<PostCreatePage />} />
            <Route path=":id" element={<PostDetailPage />} />
            </Route>
        </Route>


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
