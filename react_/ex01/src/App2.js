import test from "./test"
import Header from "./Header"
import Nav from "./Nav"
import Main from "./Main"
function App() {
  const num = 100
  console.log(`num : ${num}`)
  //function Click(){}
  const click = () => {
    alert("클릭!!!")
  }
  return (
    <div className="App">
      num : {num}
      <Header test="연습" number={num} /> 
      <Nav name="홍길동" addr="산골짜기" /> 
      <Main myClick={click} tel="010-xxx" nick="도적" />
    </div>
  );
}
export default App;