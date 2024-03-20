import './CheckButton.scss'
import { ButtonHTMLAttributes } from 'react'
import { Check } from '@phosphor-icons/react'


type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title?: string
}

export function CheckButton({title, ...rest}: buttonProps) {
    return(
        <button id='checkbutton' {...rest}><Check size={24}/></button>
    )
}