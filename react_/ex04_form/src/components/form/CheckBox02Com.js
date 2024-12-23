const CheckBox02Com = ({ onCheckBox, isChecked }) => {
    return <>
        <label>확인</label>
        <input type="checkbox" onChange={onCheckBox} checked={isChecked} />
    </>
}
export const CheckBoxComponent = ({ onChangeHobby, hobby, onSubmit }) => { // 만들면서 바로 내보냄
    return <>
        <form onSubmit={onSubmit}> 
            {hobby.map(data => (
                <span key={data.key}>
                    <label>{data.label}</label>
                    <input type="checkbox" checked={data.isChecked} onChange={() => onChangeHobby(data.key)} />
                </span>
            ))}
            <button>클릭</button>
        </form>
    </>
}
export default CheckBox02Com