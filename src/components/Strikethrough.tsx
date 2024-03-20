import './ButtonsTask.scss'
import { ButtonHTMLAttributes } from 'react'
import { TextStrikethrough } from '@phosphor-icons/react'


type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title?: string
}

export function Strikethrough({title, ...rest}: buttonProps) {
    return(
        <button {...rest}><TextStrikethrough size={24}/></button>
    )
}