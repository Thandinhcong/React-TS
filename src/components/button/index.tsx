import React from 'react'

type ButtonProps = {
    children: React.ReactNode,
    primary?: boolean,
    danger?: boolean
    onClick?: () => void;
}

const Button = ({ children, primary, danger, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`
        btn btn-primary
        ${primary ? "btn btn-primary" : ""}
        ${danger ? "btn btn-danger" : ""}
        
        `}>
            {children}
        </button>
    )
}

export default Button