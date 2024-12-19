const Quiz02InOutCom = ({ data, In, Out }) => {
    return <>
        {data}<br />
        <button onClick={In}>IN</button> <button onClick={Out}>OUT</button>
    </>
}
export default Quiz02InOutCom