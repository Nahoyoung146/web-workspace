import StateTest from "./StateTest"
import Quiz01Container from "./containers/Quiz01Container"
import Quiz02InOutCon from "./containers/Quiz02InOutCon"
import CopyTest from "./components/CopyTest"
import CopyTest02 from "./components/CopyTest02"
import Quiz03StoreCon from "./containers/Quiz03StoreCon"
function App() {
    return <>
        <StateTest /><hr />
        <Quiz01Container /><hr />
        <Quiz02InOutCon /><hr />
        <CopyTest /> <hr />
        <CopyTest02 /><hr />
        <Quiz03StoreCon />
    </>
}
export default App