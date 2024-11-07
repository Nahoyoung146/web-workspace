function init() {
    const n1 = prompt("수(짝/홀) 입력")
    const n2 = prompt("수(3의 배수) 입력")
    const n3 = prompt("첫번째 수를 입력")
    const n4 = prompt("두번째 수를 입력")
    let result = (n1 % 2 == 0) ? `${n1} : 짝수` : `${n1} : 홀수`
    document.write(`${a}<br>`)
    result = (n2 % 3 == 0) ? `${n2} : 3의 배수 ` : `${n2} : 3의 배수가 아님 `
    document.write(`${a}<br>`)
    result = (n3 > n4) ? `큰 수 : ${n3}` : `큰 수 : ${n4}`
    document.write(`${a}`)
}