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

  // utilizzo dello useState per la gestione dei data (array di oggetti post)
  const [posts, setPosts] = useState([]);

  // funzione di gestione chiamata all'API
  function fetchPosts() {
    axios.get("http://localhost:3000/posts")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error))
  }

  // richiamo la funzione di richiesta dati al caricamento del componente
  // Solo al primo rendering
  useEffect(fetchPosts, []);

  return (
    <GlobalContext.Provider value={{ posts }} >
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
    </GlobalContext.Provider>
  )
}

export default App
