export const RadioBox03Com = ({onChangeAge, onSubmit, age}) => {
    return <>
        <form onSubmit={onSubmit}>
            {age.map(data => (
                <span key={data.key}>
                    <label>{data.value}</label>
                    <input type="radio" name={data.name} checked={data.isChecked} onChange={() => onChangeAge(data.key)} />
                </span>
            ))}
            <button>클릭</button>
        </form>
    </>
}