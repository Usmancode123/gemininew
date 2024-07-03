import { createContext, useState } from "react";
import run from "../Config/Gemini";
export const Context =createContext()


const ContextProvider =(props)=>{

   const [input,setInput]=useState('')
   const[recentPrompt,setRecentPrompt]=useState('')
   const [prevPrompt,setPrevPromt]=useState([])
   const [showResult,setShowResult]=useState(false)
   const [loading,setloading]=useState(false)
   const [resultData,setResultData]=useState('')

const onSent =async(prompt)=>{
    // setResultData('')
    // setloading(true)
    // setShowResult(true)
    // const response=
     await run(input)
    // setResultData(response)
    // setloading(false)
    // setInput('')
    // console.log(response);
}

onSent('what is react js')

const ContextValue={
prevPrompt,
setPrevPromt,
onSent,
setRecentPrompt,
recentPrompt,
showResult,
loading,
resultData,
input,
setInput
}
return(
    <Context.Provider value={ContextValue}>
        {props.children}
    </Context.Provider>
)

}

export default ContextProvider