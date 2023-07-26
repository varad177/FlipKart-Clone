import { createContext, useState } from "react";


export const DataContext = createContext(null)

const DataProvider = ({children}) => {

    const [account, setAccount] = useState("")



    return (
        //context se jo jo provide karna hai vo ham value me likhte hai 

        <DataContext.Provider value={{
            account,
            setAccount

        }} >
        {children}

        </DataContext.Provider>
    )
}

export default DataProvider;