import { useParams } from "react-router-dom"

const MUpdateCom = () => {
    const params = useParams()
    console.log(params)
    return <>
        <div>{params.id} : MUpdateCom</div>
    </>
}
export default MUpdateCom