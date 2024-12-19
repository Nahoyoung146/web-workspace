import { useState } from "react"
const StateTest = () => {
    const [data, setData] = useState(0)
    let num = 0
    console.log("start : ", data)
    const click = () => {
        console.log("click : ", data)
        setData(data + 1)
        //num = num + 1
    }
    return <>
        data : {data}<br />
        <button onClick={click}>클릭</button>
    </>
}
export default StateTest