const initialState = {
    login: { id: "", pwd: "" },
    register: { id: "", pwd: "", name: "", addr: "" },
    data: null,
    flag: false,
    error: null
}
const reducer = (state, action) => {
    switch (action.type) {
        case "LIST": return { ...state, data: action.data }
        case "CHANGE_INPUT":
            console.log("state : ", state)
            console.log("action : ", action)
            const form = state[action.form]
            //form = {id:"",pwd:""}
            form[action.name] = action.value
            //form = {id:"111",pwd:""}
            //form = {id:"111",pwd:"222"}
            return { ...state, [action.form]: { ...form } }
        case "LOADING" : return {...state, flag:true, error:null}
        case "FINISHED" : return {...state, flag:false, error:null}
        case "ERROR" : return {...state, flag:false, error:action.msg}
        default: return state
    }
}
export { initialState, reducer }