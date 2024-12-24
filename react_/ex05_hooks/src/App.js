import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./page/LoginPage";
import { RegPage } from "./page/RegPage";
import ReducerCom from "./components/ReducerCom";
import { ListPage } from "./page/ListPage";
import { TestCon } from "./containers/TestCon";
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
    {/* <ReducerCom /> */}
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/context" element={<TestCon />} />
    </Routes>
  </>
}

export default App;