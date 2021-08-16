import React, {useState} from "react";
import TextField from "../TextField";
import Adornment from "../Adornment";
import '../../assets/CssIcons/PasswordIcon.css';
import '../../assets/CssIcons/EyeIcon.css';

export default function PasswordField(props:any) {
    const {placeholder, value = '', label, onChange = () => {}, icon} = props;
    const [hidePassword, setHidePassword] = useState<boolean>(true);
    return (
        <TextField
            type={hidePassword ? 'password' : 'text'}
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
            label={label}
            value={value}
            startAdornment={<Adornment>{icon ? icon : <i className={'gg-lock'}/>}</Adornment>}
            endAdornment={
                <Adornment
                    style={{cursor: 'pointer'}}
                    onMouseUp={() => setHidePassword(true)}
                    onMouseDown={() => setHidePassword(false)}>
                    {icon ? icon : <i className={'gg-eye'}/>}
                </Adornment>}
        />
    )
}