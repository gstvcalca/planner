import { ReactNode } from "react"


interface InputContainerProps{
    children?: ReactNode
}

export function InputContainer({children}: InputContainerProps){
    return(
        <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            {children}
        </div>
    )
}