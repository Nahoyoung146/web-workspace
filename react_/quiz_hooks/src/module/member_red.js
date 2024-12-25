const initialState = {
    login: { id: "", pwd: "" },
    data: null,
    flag: false,
    error: null
}
const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            const form = state[action.form]
            form[action.name] = action.value
            return { ...state, [action.form]: { ...form } }
        case "LOADING":
            return { ...state, flag: true, error: null }
        case "FINISHED":
            return { ...state, flag: false, error: null }
        case "ERROR":
            return { ...state, flag: false, error: action.msg }
        default:
            return state
    }
}
export { initialState, reducer }