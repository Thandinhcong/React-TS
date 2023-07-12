import React from 'react'

type Props = {
    primary?: boolean
    danger?: boolean
    children: React.ReactNode,
    onClick?: () => void;
}

const Button = ({ primary, danger, children, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`
        btn btn-primary
        ${primary ? "btn btn-primary" : ""}
        ${danger ? "btn btn-danger" : ""}
        
        `}>
            {children}</button>
    )
}
export default Button;
