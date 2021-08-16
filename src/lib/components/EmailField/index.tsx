import React from "react";
import '../../assets/CssIcons/EmailIcon.css';
import TextField from "../TextField";
import Adornment from "../Adornment";

export default function EmailField(props:any) {
    const {placeholder, value = '', label, onChange = () => {}, icon} = props;

    return (
        <TextField
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
            label={label}
            value={value}
            startAdornment={<Adornment>{icon ? icon : <i className={'gg-mail'}/>}</Adornment>}
        />
    )
}