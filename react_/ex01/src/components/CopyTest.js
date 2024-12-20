function CopyTest() {
    let arr01 = [1, 2, 3]
    //const arr02 = [arr01[0],arr01[1],arr01[2]]
    const arr02 = [...arr01]
    arr02[3] = 1234
    const obj01 = { id: "aaa", name: "홍길동" }
    //const obj02 = obj01
    const obj02 = {...obj01, id : "다른값"}
    obj02['name']="김개똥"

    arr01.push(1000) // 주소는 동일
    arr01 = arr01.concat(2000) // 주소가 바뀜, 깊은 복사

    return <>
        obj01<br />
        id : {obj01.id}<br />
        name : {obj01.name}<br />
        obj02<br />
        id : {obj02.id}<br />
        name : {obj02.name}<br />
        arr01
        <ul>
            {arr01.map(n => <li>{n}</li>)}
        </ul>
        <hr />
        arr02
        <ul>
            {arr02.map(n => <li>{n}</li>)}
        </ul>
    </>
}
export default CopyTest