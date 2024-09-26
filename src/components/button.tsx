import { ComponentProps, ReactNode } from "react";
import {tv, VariantProps} from 'tailwind-variants'

const btn = tv({
    base: "px-5 py-2 rounded-lg font-medium flex items-center gap-2 justify-center",
    variants: {
        cstyle: {
            primary: 'bg-lime-400 text-lime-950 hover:bg-lime-300',
            secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
        },
        size: {
            full: 'w-full h-11'
        }
    },
    defaultVariants: {
        cstyle: 'primary'
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof btn> {
    children: ReactNode
}

export function Button({children, cstyle, size, ...props}: ButtonProps){
    return (
        <button {...props} className={btn({cstyle, size})}>
            {children}
        </button>
    )
}