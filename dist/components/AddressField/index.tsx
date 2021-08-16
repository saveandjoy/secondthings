import React from "react";
import TextField from "../TextField";
import Adornment from "../Adornment";
import '../../assets/CssIcons/AddressIcon.css';

export default function AddressField(props:any) {
    const {placeholder, value = '', label, onChange = () => {}, icon} = props;

    return (
        <TextField
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
            label={label}
            value={value}
            startAdornment={<Adornment>{icon ? icon : <i className={'gg-home'}/>}</Adornment>}
        />
    )
}