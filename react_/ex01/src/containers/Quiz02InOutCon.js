import Quiz02InOutCom from "../components/Quiz02InOutCom"
import { useState } from "react"
const Quiz02InOutCon = () => {
    const [data, setData] = useState("")
    if (!data)
        setData("값이 존재하지 않음!!")

    const In = () => {
        setData("어서오세요^^")
    }
    const Out = () => {
        setData("안녕히가세요^^")
    }
    return <>
        <Quiz02InOutCom data={data} In={In} Out={Out} />
    </>
}
export default Quiz02InOutCon