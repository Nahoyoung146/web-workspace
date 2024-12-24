export const ListCom = ({ list, flag, error }) => {
    // let num = 10
    // (num > 10) ? 크다 : (num === 10) ? 두 값은 같다 : 작다
    return <>
        {
            flag ? <h3>loading...</h3> : error === null ?
                list && list.map(d => (
                    <div key={d.id}>
                        id : {d.id}, name : {d.name}, addr : {d.addr}
                    </div>
                )) : <h3>{error}</h3>
        }
    </>
}