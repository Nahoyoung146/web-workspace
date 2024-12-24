import { useEffect, useReducer, useState } from "react"
import { ListCom } from "../components/ListCom"
import { getList } from "../service/member_ser"
import { initialState, reducer } from "../moduls/member_red"

export const ListCon = () => {
    //const [list, setList] =useState([])
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        //setList(getList)
        try {
            dispatch({ type: "LOADING" })
            setTimeout(() => {
                const data = getList()
                dispatch({ type: "LIST", data })
                dispatch({ type: "FINISHED" })
            }, 2000)
            // throw new Error("failed to fetch data") 에러 강제 발생
        } catch (e) {
            dispatch({ type: "ERROR", msg: e.toString() })
        }
    }, [])
    return <>
        <ListCom flag={state.flag} list={state.data} error={state.error} />
    </>
}