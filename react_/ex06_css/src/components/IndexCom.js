import styled from "styled-components"
import imageFile from "../styles/images/1.jpg"
const products = [
    { id: 1, name: "탱담 사료", context: "맛있고 건강한 사료", price: "500원", url: imageFile },
    { id: 2, name: "탱담 사료", context: "맛있고 건강한 사료", price: "500원", url: imageFile },
    { id: 3, name: "탱담 사료", context: "맛있고 건강한 사료", price: "500원", url: imageFile },
    { id: 4, name: "탱담 사료", context: "맛있고 건강한 사료", price: "500원", url: imageFile },
    { id: 5, name: "탱담 사료", context: "맛있고 건강한 사료", price: "500원", url: imageFile },
    { id: 6, name: "탱담 사료", context: "맛있고 건강한 사료", price: "500원", url: imageFile },
    { id: 7, name: "탱담 사료", context: "맛있고 건강한 사료", price: "500원", url: imageFile },
    { id: 8, name: "탱담 사료", context: "맛있고 건강한 사료", price: "500원", url: imageFile },
    { id: 9, name: "탱담 사료", context: "맛있고 건강한 사료", price: "500원", url: imageFile }
]
const ProductBlock = styled.div`
   position: absolute;
   width: 100%;
   top: 120px;
`
const ProductListWrap = styled.div`
    width: 1100px;
    margin : 0 auto;
`
const ProductBlockTitle = styled.h2`
    text-align:center; color:chocolate;
`
const ProductList = styled.div`
    display : flex; 
    flex-flow : wrap;
`
const ProductListBox = styled.div`
    width : 252.5px;
    border : 1px solid #ccc;
    border-radius : 5px; 
    box-shadow : 0 0 5px rgba(0,0,0,0.1);
    margin-right : 30px;
    &:nth-child(4n){margin-right : 0;}
    margin-top : 20px;
`
const ProductImg = styled.img`
    width : 100%;
`
const ProductName = styled.h3`
font-size: 20px; text-align: center;
   width: 50%; margin: auto;
   padding: 10px 0; border-bottom: 1px solid gray;
`
const ProductContext = styled.p`
    font-size : 15px;
    margin-left : 5px;
    margin-right : 5px
`
const ProductPrice = styled.p`
    font-size : 15px;
    margin-right : 5px;
    color : #007bff;
    text-align : right;
`
const IndexCom = () => {
    return <>
        <ProductBlock>
            <ProductListWrap>
                <ProductBlockTitle>맛있는 사료!!!</ProductBlockTitle>
                <ProductList>
                    {products.map(data => (
                        <ProductListBox key={data.id}>
                            <ProductImg src={data.url} alt="" />
                            <ProductName>{data.name}</ProductName>
                            <ProductContext>{data.context}</ProductContext>
                            <ProductPrice>{data.price}</ProductPrice>
                        </ProductListBox>
                    ))}
                </ProductList>
            </ProductListWrap>
        </ProductBlock>
    </>
}
export default IndexCom