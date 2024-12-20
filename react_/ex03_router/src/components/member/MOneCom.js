import { useSearchParams } from "react-router-dom"

const MOneCom = () => {
    const arr = [100, 200, 300]
    const [a] = arr
    console.log(a + " , ")
    const [params] = useSearchParams()
    console.log("params : ", params)
    return <>
        <div>{params.get("id")} : MOneCom</div>
    </>
}
export default MOneCom