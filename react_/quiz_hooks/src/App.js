import { Routes, Route } from "react-router-dom";
import MListPage from "./pages/member/MListPage";
import MOnePage from "./pages/member/MOnePage";
import IndexPage from "./pages/IndexPage"
import HeaderCom from "./components/common/HeaderCom";
import NotFound from "./components/common/NotFound";
import MDeletePage from "./pages/member/MDeletePage";
import { MInserttPage } from "./pages/member/MInsertPage";
import { MUpdatePage } from "./pages/member/MUpdatePage";

function App() {
  return <>
    <Routes>
      <Route element={<HeaderCom />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/member">
          <Route path="list" element={<MListPage />} />
          <Route path="one/:id" element={<MOnePage />} />
          <Route path="delete/:id" element={<MDeletePage />} />
          <Route path="insert" element={<MInserttPage />} />
          <Route path="update/:id" element={<MUpdatePage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
}

export default App;