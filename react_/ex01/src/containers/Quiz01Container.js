import Quiz01Component from "../components/Quiz01Component"
import {useState} from "react"
const Quiz01Container = () => {
    const [data,setData] = useState(0)
    const plus = () => {
        setData(data+1)
    }
    const minus = () => {
        setData(data-1)
    }
    return<>
        <Quiz01Component plus={plus} minus={minus} data={data} />
    </>

}

export default Quiz01Container