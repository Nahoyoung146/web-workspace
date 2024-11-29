const readURL = (file) => {
    console.log("file : :", file)
    const f = file.files[0]
    console.log("f : ", f)
    if (f != "") {
        let reader = new FileReader()
        reader.readAsDataURL(f)
        reader.onload = (e) => {
            document.querySelector("#preview").src = e.target.result
            //e.target.result = 이미지 경로 의미
        }
    }
}