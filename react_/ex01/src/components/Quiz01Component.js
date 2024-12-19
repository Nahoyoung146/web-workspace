const Quiz01Component = (props) => {
    return<>
        {props.data}
        <hr />
        <button onClick={props.plus}>+</button> <button onClick={props.minus}>-</button>
    </>
}
export default Quiz01Component