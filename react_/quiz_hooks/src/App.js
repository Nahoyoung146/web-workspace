import { Routes, Route } from "react-router-dom";
import MListPage from "./pages/member/MListPage";
import MOnePage from "./pages/member/MOnePage";
import IndexPage from "./pages/IndexPage"
import NotFound from "./components/common/NotFound";
import MDeletePage from "./pages/member/MDeletePage";
import { MInserttPage } from "./pages/member/MInsertPage";
import { MUpdatePage } from "./pages/member/MUpdatePage";
import { MLoginPage } from "./pages/member/MLoginPage";
import { HeaderCon } from "./containers/HeaderCon";
import { useContext, useEffect } from "react";
import { AuthContext } from "./containers/AuthContext";
function App() {
  const { loginState, auth } = useContext(AuthContext)
  useEffect(() => {
    if (sessionStorage.getItem("auth") && !auth.isLoggedIn) {
      loginState()
    }
  })
  return <>
    <Routes>
      <Route element={<HeaderCon />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/member">
          <Route path="list" element={<MListPage />} />
          <Route path="one/:id" element={<MOnePage />} />
          <Route path="delete/:id" element={<MDeletePage />} />
          <Route path="insert" element={<MInserttPage />} />
          <Route path="update/:id" element={<MUpdatePage />} />
          <Route path="login" element={<MLoginPage />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
}

export default App;