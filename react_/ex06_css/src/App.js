// import CssCom from "./components/CssCom";
import { Route, Routes } from "react-router-dom";
import IndexCon from "./containers/IndexCon";
import LoginCon from "./containers/LoginCon";

function App() {
  return <>
    {/* <CssCom myWidth="300px" >로그인</CssCom> */}
    <Routes>
      <Route path="/" element={<IndexCon />}></Route>
      <Route path="/login" element={<LoginCon />}></Route>
    </Routes>
  </>
}

export default App;