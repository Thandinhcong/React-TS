import React from 'react'

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string
}

const Input = ({ onChange, placeholder }: InputProps) => {
    return (
        <div>
            <input type="text" placeholder={placeholder} className='form-control' onChange={onChange} />
        </div>
    )
}

export default Input