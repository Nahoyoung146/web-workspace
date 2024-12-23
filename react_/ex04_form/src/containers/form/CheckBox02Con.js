import { useState } from "react"
import CheckBox02Com, { CheckBoxComponent } from "../../components/form/CheckBox02Com" // default값이 아니면 이름에 중괄호 처야 됨
const CheckBox02Con = () => {
    const [isChecked, setIsChecked] = useState(false)
    const onCheckBox = () => {
        setIsChecked(!isChecked)
    }
    const init = [
        { key: 1, label: "게임", isChecked: false },
        { key: 2, label: "운동", isChecked: false },
        { key: 3, label: "독서", isChecked: false }
    ]
    const [hobby, setHobby] = useState(init)
    const onChangeHobby = (key) => {
        console.log("key : ", key)
        const updateHobby = hobby.map(data => (
            data.key === key ? { ...data, isChecked: !data.isChecked } : data
        ))
        console.log("변경 전 : ", hobby)
        console.log("변경 후 : ", updateHobby)
        setHobby(updateHobby)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("취미 선택 : ", hobby)
    }
    return <>
        <CheckBox02Com onCheckBox={onCheckBox} isChecked={isChecked} /><hr />
        <CheckBoxComponent onSubmit={onSubmit} onChangeHobby={onChangeHobby} hobby={hobby} />
    </>
}

export default CheckBox02Con