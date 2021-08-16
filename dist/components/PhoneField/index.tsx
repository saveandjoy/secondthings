import React from "react";
import TextField from "../TextField";
import Adornment from "../Adornment";
import '../../assets/CssIcons/PhoneIcon.css';

interface IPhoneFieldProperties {
    placeholder?: string;
    value?: string;
    label: string;
    onChange?: (phoneNumber:string) => void;
    icon?: any;
}

export default function PhoneField(props:IPhoneFieldProperties) {
    const {placeholder, value = '', label, onChange = () => {}, icon} = props;

    const handleChange = (event:any) => {
        const regExp = /(?:(?:^|[+])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/
        if ((event.target != null && event.target.value.match(regExp)) || !event.target.value.trim().length) {
            onChange(event.target.value);
        }
    }

    return (
        <TextField
            label={label}
            type={'phone'}
            onChange={(event:Event) => handleChange(event)}
            placeholder={placeholder}
            value={value}
            startAdornment={<Adornment>{icon ? icon : <i className={'gg-phone'}></i>}</Adornment>}
        />
    )
}