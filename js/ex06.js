function init(){
    const num1=10
    const num2=4
    document.write("---- 산술 연산자 ----<br>")
    document.write(`${num1}/${num2}=${num1/num2}<br>`)
    document.write(`${num1}/${num2}=${Number(num1/num2)}<br>`)
    document.write(`${num1}/${num2}=${parseInt(num1/num2)}<br>`)
    document.write(`${num1}*${num2}=${num1*num2}<br>`)
    document.write(`${num1}%${num2}=${num1%num2}<br>`)
    document.write("---- 복합대입 연산자 ----<br>")
    let n1,n2;
    n1=n2=5;
    n1+=1 // n1=n1+1
    document.write(`n1 : ${n1}<br>`)
    n1-=1 // n1=n1-1
    document.write(`n1 : ${n1}<br>`)
    n1*=n2 // n1=n1*n2
    document.write(`n1 : ${n1}<br>`)
    n1/=n2 // n1=n1/n2
    document.write(`n1 : ${n1}<br>`)
    n1%=n2 // n1=n1%n2
    document.write(`n1 : ${n1}<br>`)
    document.write("---- 관계 연산자 ----<br>")
    n1="3"
    n2=4;
    let n3=3
    document.write(`n1 <= n2 : ${n1 <= n2}<br>`)
    document.write(`n1 >= n2 : ${n1 >= n2}<br>`)
    document.write(`n1 == n2 : ${n1 == n2}<br>`)
    document.write(`n1 != n2 : ${n1 != n2}<hr>`)

    document.write(`n1 == n3 : ${n1 == n3}<br>`)
    document.write(`n1 === n3 : ${n1 === n3}<br>`) //===은 자료형까지 일치하는지 확인
    document.write(`n1 !== n3 : ${n1 !== n3}<br>`)
    document.write("---- 논리 연산자 ----<br>")
    document.write(`(true&&true) : ${true&&true}<br>`)
    document.write(`(true&&false) : ${true&&false}<br>`)
    document.write(`(5>10&&10>2) : ${5>10&&10>2}<hr>`)
    document.write(`(true||true) : ${true||true}<br>`)
    document.write(`(true||false) : ${true||false}<br>`)
    document.write(`(5>10||10>2) : ${5>10||10>2}<hr>`)
    document.write(`!true : ${!true}<br>`)
    document.write("---- 증감 연산자 ----<br>")
    n1=10;
    n2=++n1
    n3=n1++
    document.write(n1 + " , " + n2 + " , " + n3)
    document.write("---- 삼항 연산자 ----<br>")
    n1=5
    n2=7
    n3=(n1>n2)?n1:n2
    document.write(`큰 값 : ${n3}<br>`)
}
