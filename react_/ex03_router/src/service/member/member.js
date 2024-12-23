let data_set = [
    { id: "aaa", pwd: "aaa", name: "홍길동", addr: "산골짜기" },
    { id: "bbb", pwd: "bbb", name: "김개똥", addr: "개똥별" },
    { id: "ccc", pwd: "ccc", name: "고길동", addr: "마포구" }
]
//const getList = () => data_set
const getList = async () => {
    const res = await fetch("http://localhost:4000/members")
    // console.log("member : ", await res.json())
    return await res.json()
}
// const getList = () => fetch("http://localhost:4000/members")
// const deleteList = (id) => {
//     data_set = data_set.filter(data => data.id !== id)
// }

const deleteList = (id) => fetch("http://localhost:4000/members/"+id, {method:"delete"})

export { getList, deleteList }