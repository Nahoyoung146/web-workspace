import { createContext, useState } from "react";

const init = { number: 0 }
const TestContext = createContext()
const TestProvider = ({ children }) => {
    const [data, setData] = useState(init)
    const clickPlus = () => {
        //alert("click plus")
        setData({ number: data.number + 1 })
    }
    const clickSub = () => {
        //alert("click sub")
        setData({ number: data.number - 1 })
    }
    const click = { clickPlus, clickSub, data }
    return <>
        <TestContext.Provider value={click}>
            {children}
        </TestContext.Provider>
    </>
}

export { TestContext, TestProvider }