function Child(props) {
    console.log("child props : " , props)
    // const {name} = props
    const [a,b,c] = props.children
    const arr = props.children
    return <>
        a : {a}, b : {b}, c:{c}<br />
        arr[0] : {arr[0]}
        <h3>name : {props.name}</h3>
        <h3>children : {props.children}</h3>
    </>
}
export default Child