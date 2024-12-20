import {useState} from "react"
function CopyTest02(){
    const [arr, SetArr] = useState([1,2])
    const onBtn = () => {
        // arr.push("안녕")
        console.log("arr : ", arr)
        SetArr(arr.concat("안녕"))
    }

    const [obj, setObj] = useState({name : "김개똥", addr : "개똥별"})
    const onChangeName = () => {
        setObj({name : "홍길동",addr : obj.addr})
    }
    const onChangeAddr = () => {
        setObj({...obj,addr : "별이"})
    }
    return <>
        name : {obj.name}<br />
        addr : {obj.addr}<br />
        <button onClick={onChangeName}>이름 변경</button>
        <button onClick={onChangeAddr}>주소 변경</button><br />
        arr : {arr}<br />
        <button onClick={onBtn}>클릭</button>
    </>
}
export default CopyTest02