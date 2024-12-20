import Quiz03StoreCom from "../components/Quiz03StoreCom"
import {useState} from "react"
function Quiz03StoreCon(){
    const [store,setStore] = useState({msg : "" , inData : 0 , outData : 0})
    if(!store.msg)
        store.msg = "오픈 전 입니다."
    const In = () => {
        setStore({...store, inData : store.inData+1, msg : "어서오세요"})
    }
    const Out = () => {
        if(store.inData-store.outData<=0)
            alert("나갈 손님이 없습니다!!")
        else{
            setStore({...store, outData : store.outData+1, msg : "안녕히 가세요"})
        }
    }
    return <>
        <Quiz03StoreCom store={store} In={In} Out={Out} />
    </>
}
export default Quiz03StoreCon