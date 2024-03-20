import './ButtonsTask.scss'
import { ButtonHTMLAttributes } from 'react'
import { Trash } from '@phosphor-icons/react'


type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title?: string
}

export function TrashButton({title, ...rest}: buttonProps) {
    return(
        <button {...rest}><Trash size={24}/></button>
    )
}