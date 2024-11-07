let flag = true
function btn() {
    console.log(flag)
    if (flag) {
        document.getElementById("main").innerHTML = "&#8618; 이 명작이 폭등할 거라고 확신해요"
        document.getElementById("btn").innerHTML = "원래대로"
    }

    else {
        document.getElementById("main").innerHTML = "&#8618; I'm sure this masterpiece will skyrocket"
        document.getElementById("btn").innerHTML = "번역"
    }

    flag = !flag
    console.log(flag)
}