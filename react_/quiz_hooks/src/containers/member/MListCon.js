import MListCom from "../../components/member/MListCom"
import { useEffect, useState } from "react"
import { getList } from "../../service/member/member"

const MListCon = () => {
    const [list, setList]=useState([])
    useEffect(()=>{
        setList(getList())
    },[])
    return <>
        <MListCom list={list} />
    </>
}
export default MListCon