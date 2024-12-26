import "../styles/test.css"
import styled, { css } from "styled-components"
const CssCom1 = () => {
    const style = { color: "blue", fontSize: "30px" }
    return <>
        <div style={style}>CssCom</div>
        <div style={{ color: "blue", fontSize: "30px" }}>CssCom</div>
        <div className="test">test css</div>
    </>
}

const Div01 = styled.div`
    color : red; font_size : 30px
`
const colorList = ["red", "blue"]
const H101 = styled.h1`
    background : ${colorList[0]};
    color : ${colorList[1]} 
`
const CssCom2 = () => {
    return <>
        <Div01>연습 중!!!</Div01>
        <H101>h1</H101>
    </>
}
const Button01 = styled.button`
    width : 500px;
    background : green;
    ${props => props.myWidth && css`
        background : gold; width : ${props.myWidth}
        `}
`
const CssCom = (props) => {
    console.log("props : ", props)
    return <>
        <Button01 {...props} />
    </>
}
export default CssCom