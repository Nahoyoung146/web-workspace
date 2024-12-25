let data_set = [
    { id: "aaa", pwd: "aaa", name: "홍길동", addr: "산골짜기" },
    { id: "bbb", pwd: "bbb", name: "김개똥", addr: "개똥별" },
    { id: "ccc", pwd: "ccc", name: "고길똥", addr: "마포구" },
]

const getList = () => data_set

const getOne = (id) => {
    return data_set.filter(data => data.id === id)[0]
}

const del = (id) => {
    data_set = data_set.filter(data => data.id !== id)
}

const insert = (body) => {
    data_set = data_set.concat(body)
}

const update = (body) => {
    let name = data_set.filter(data => data.id === body.id)[0]
    name.name = body.name
    name.addr = body.addr
}

const loginCheck = (id, pwd) => {
    const data = data_set.filter(data => data.id === id)
    if (data.length !== 0) {
        if (data[0].pwd === pwd) {
            return 0
        }
        else {
            return 1
        }
    }
    else {
        return -1
    }
}

export { getList, getOne, del, insert, update, loginCheck }