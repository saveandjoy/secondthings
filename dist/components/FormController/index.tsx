import React from "react";
import {IFormInput} from "../../Models/FormInput";
import {
    ADDRESS_INPUT,
    BUTTON_SELECT,
    CHIP_SELECT,
    EMAIL_INPUT,
    NUMBER_FIELD, PASSWORD_INPUT,
    PHONE_INPUT,
    SELECT_FIELD,
    TEXT_AREA,
    TEXT_FIELD,
    TOGGLE
} from "../../constants/FormController";
import TextField from "../TextField";
import styled from "styled-components";
import PhoneField from "../PhoneField";
import '../../assets/CssIcons/PhoneIcon.css';
import EmailField from "../EmailField";
import NumberField from "../NumberField";
import TextArea from "../TextArea";
import Toggle from "../Toggle";
import Select from "../Select";
import ChipSelect from "../ChipSelect";
import ButtonSelect from "../ButtonSelect";
import AddressField from "../AddressField";
import PasswordField from "../PasswordField";

interface IFormController {
    value: any;
    fields: IFormInput[];
    onChange: (value:string|number|boolean, key:string) => void;
}

const StyledFormControllerInput = styled.div`
  text-align: left;
  & > div {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

export default function FormController(props:IFormController) {
    const {value, fields, onChange} = props;

    const handleChange = (value:any, key:string) => {
        onChange(value, key)
    }

    const getFields = () => {
        if (fields && fields.length) {
            return fields.map((field) => {
                switch (field.type) {
                    case TEXT_FIELD:
                        return (
                            <TextField
                                onChange={(event:any) => handleChange(event.target.value, field.key)}
                                value={value[field.key]}
                                label={field.label}
                                placeholder={field.placeholder}
                            />);
                    case PHONE_INPUT:
                        return (
                            <PhoneField
                                onChange={(value:string) => handleChange(value, field.key)}
                                value={value[field.key]}
                                label={field.label}
                                placeholder={field.placeholder}
                            />
                        );
                    case EMAIL_INPUT:
                        return (
                            <EmailField
                                onChange={(value:string) => handleChange(value, field.key)}
                                value={value[field.key]}
                                label={field.label}
                                placeholder={field.placeholder}
                            />
                        );
                    case NUMBER_FIELD:
                        return (
                            <NumberField
                                onChange={(value:number) => handleChange(value, field.key)}
                                value={value[field.key]}
                                label={field.label}
                                placeholder={field.placeholder}/>
                        );
                    case TEXT_AREA:
                        return (
                            <TextArea
                                onChange={(value:string) => handleChange(value, field.key)}
                                value={value[field.key]}
                                label={field.label}
                                placeholder={field.placeholder}
                            />
                        );
                    case TOGGLE:
                        return (
                            <Toggle
                                onChange={(value:boolean) => handleChange(value, field.key)}
                                value={value[field.key]}
                                label={field.label}
                            />
                        );
                    case SELECT_FIELD:
                        return (
                            <Select
                                label={field.label}
                                value={value[field.key]}
                                onChange={(value:string|number) => handleChange(value, field.key)}
                                dataset={field.dataset ? field.dataset : []}/>
                        );
                    case CHIP_SELECT:
                        return (
                            <ChipSelect
                                value={value[field.key]}
                                dataset={field.dataset ? field.dataset : []}
                                label={field.label}
                                onChange={(values:string[]) => handleChange(values, field.key)}
                                placeholder={field.placeholder}/>
                        );
                    case BUTTON_SELECT:
                        return (
                            <ButtonSelect
                                dataset={field.dataset ? field.dataset : []}
                                label={field.label}
                                placeholder={field.placeholder}
                                value={value[field.key]}
                                onChange={(values:string[]) => handleChange(values, field.key)}/>
                        );
                    case ADDRESS_INPUT:
                        return (
                            <AddressField
                                onChange={(value:string) => handleChange(value, field.key)}
                                value={value[field.key]}
                                label={field.label}
                                placeholder={field.placeholder}
                            />);
                    case PASSWORD_INPUT:
                        return (
                            <PasswordField
                                onChange={(value:string) => handleChange(value, field.key)}
                                value={value[field.key]}
                                label={field.label}
                                placeholder={field.placeholder}
                            />);
                }
            })
        } else {
            return null;
        }
    }

    return (
        <StyledFormControllerInput>
            {getFields()}
        </StyledFormControllerInput>
    )
}