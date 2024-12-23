import { useState } from "react"
import { RadioBox03Com } from "../../components/form/RadioBox03Com"
export const RadioBox03Con = () => {
    const init = [
        { key: 1, value: "10대", name : 'age', isChecked: false },
        { key: 2, value: "20대", name : 'age', isChecked: false },
        { key: 3, value: "30대", name : 'age', isChecked: false }
    ]
    const [age, setAge] = useState(init)
    const onChangeAge = (key) => {
        const updateAge = age.map(data => (
            data.key === key ? { ...data, isChecked: !data.isChecked } : { ...data, isChecked: false }
        ))
        setAge(updateAge)
        console.log("변경 전 : ", age)
        console.log("변경 후 : ", updateAge)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("나이 선택 : ", age)
    }
    return <>
        <RadioBox03Com onChangeAge={onChangeAge} onSubmit={onSubmit} age={age} />
    </>
}