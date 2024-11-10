//캔버스 세팅
let canvas;
let ctx;
canvas = document.createElement("canvas") //canvas를 만들어서 변수에 저장
ctx = canvas.getContext("2d") //2d로 그림을 그려줌
//캔버스 사이즈 지정
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas); //html의 body에다가 자식으로 canvas 갇다 붙이기

let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameOverImage;

// 우주선 좌표 > 우주선 죄표는 계속 바뀌기 때문에 따로 뺴줌
let spaceshipX = 160
let spaceshipY = 620

// 총알은 지속적으로 여러개가 필요하기 때문에 따로 함수로 생성
let bulletList = []//총알들을 저장하는 리스트
function Bullet() { //총알을 만들기 위한 자료
    this.init = function () {
        this.x = spaceshipX + 25
        this.y = spaceshipY - 30
    }

    bulletList.push(this)
}

function loadImage() { // 각 요소별 이미지 가져오기
    backgroundImage = new Image();
    backgroundImage.src = "./image/bg3.jpg"

    spaceshipImage = new Image();
    spaceshipImage.src = "비행기.png"

    bulletImage = new Image();
    bulletImage.src = "총알.png"

    enemyImage = new Image();
    enemyImage.src = "외계인.png"

    gameOverImage = new Image();
    gameOverImage.src = "게임오버.png"
}

function setupKeyboardListener() {
    addEventListener("keydown", kDown)
    addEventListener("keyup", kUp)
}

function kDown(event) {
    if (spaceshipY >= 0 && spaceshipY <= 620 && spaceshipX >= 0 && spaceshipX <= 320) {
        switch (event.code) {
            case 'ArrowUp':
                spaceshipY -= 10
                break;
            case 'ArrowDown':
                spaceshipY += 10
                break;
            case 'ArrowRight':
                spaceshipX += 10
                break;
            case 'ArrowLeft':
                spaceshipX -= 10
        }
    }

    if (spaceshipX < 0)
        spaceshipX = 0

    if (spaceshipX > 320)
        spaceshipX = 320

    if (spaceshipY < 0)
        spaceshipY = 0

    if (spaceshipY > 620)
        spaceshipY = 620
}

function kUp(event) {
    switch (event.code) {
        case 'Space':
            createBullet() //총알 생성
    }
}

function createBullet() {
    let b = new Bullet() // 총알 하나 생성
    b.init()
    console.log("새로운 총알 리스트", bulletList)
}

function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);

    for (let i = 0; i < bulletList.length; i++) {
        ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y)
    }
}

function main() {
    render()
    // console.log("animation calls main function")
    requestAnimationFrame(main)
}

loadImage() //이미지 가져오기
setupKeyboardListener();
main() //이미지 그려주기

// 방향키를 누르면
// 우주선의 좌표가 바뀌고
// 다시 render 그려준다.

// 총알 만들기
//1. 스페이스바를 누르면 총알발사
//2. 총알이 발사 = 총알의 y값이 --, 총알의 x의 값은? 스페이스를 누른 순간의 우주선의 좌표
//3. 발사된 총알들은 총알 배열에 저장을 한다.
//4. 총알들은 x,y 좌표값이 있어야 한다.
//5. 총알 배열을 가지고 render 그려준다.