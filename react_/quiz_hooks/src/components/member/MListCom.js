import { Link } from "react-router-dom"
const MListCom = ({ list }) => {
    return <>
        <table align="center" border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {list.map(data => (
                    <tr>
                        <td>{data.id}</td>
                        <td><Link to={"/member/one/" + data.id}>{data.name}</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
export default MListCom