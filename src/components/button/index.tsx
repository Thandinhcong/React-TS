import React from 'react'

type Props = {
    primary?: string
    danger?: string
    children: React.ReactNode
}

const Button = ({ primary, danger, children }: Props) => {
    return (
        <button
            className={`
        btn btn-primary
        ${primary ? "btn btn-primary" : ""}
        ${danger ? "btn btn-danger" : ""}
        
        `}>
            {children}</button>
    )
}

export default Button