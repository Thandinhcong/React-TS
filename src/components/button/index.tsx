import React from 'react'

type Props = {
    success?: boolean
    danger?: boolean
    warning?: boolean
    children: React.ReactNode,
    onClick?: () => void;
}

const Button = ({ success, warning, danger, children, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`
        btn btn-primary
        ${success ? "btn btn-success" : ""}
        ${danger ? "btn btn-danger" : ""}
        ${warning ? "btn btn-warning" : ""}
        
        `}>
            {children}</button>
    )
}
export default Button;
