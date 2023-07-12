import Input from '../input'
import Button from '../button'
import { ICar } from '../../interfaces/product'
import React, { useState } from 'react';

type FormProps = {
    onAdd: (car: ICar) => void;
}

const Form = ({ onAdd }: FormProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.target.reset();
        if (!inputValue) return;
        onAdd({
            id: Math.floor(Math.random() * 1000) + 1,
            name: inputValue
        })
        setInputValue('');
    }
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit} className='d-flex justify-content-between p-2 border'>
            <Input onChange={onHandleChange} placeholder='car name' />
            <Button primary>
                Thêm em đi
            </Button>
        </form>
    )
}

export default Form