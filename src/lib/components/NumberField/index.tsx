import React from "react";
import TextField from "../TextField";

interface INumberFieldProperties {
    placeholder?: string;
    value?: string;
    label: string;
    onChange?: (phoneNumber:number) => void;
}

export default function NumberField(props:INumberFieldProperties) {
    const {placeholder, value = '', label, onChange = () => {}} = props;

    return (
        <TextField
            onChange={(event) => onChange(event.target.value)}
            label={label}
            value={value}
            placeholder={placeholder}
            type={'number'}
        />
    )
}