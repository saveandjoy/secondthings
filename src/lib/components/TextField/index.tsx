import React, {useContext, useState} from "react";
import styled from "styled-components";
import {ITheme, Theme} from "../ThemeWrapper";

interface IStyledLabelProperties {
    theme: ITheme;
    active: boolean;
}

interface IStyledTextFieldSubWrapperProperties {
    theme: ITheme;
    active: boolean;
}

const StyledTextField = styled.input`
  width: 100%;
  font-size: ${(props:IStyledLabelProperties) => (props.theme.sizes) ? props.theme.sizes.medium : 12}px;
  outline: none;
  transition: .24s;
  border: 0;
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  &:focus {
    border-color: ${(props:IStyledLabelProperties) => props.theme.primaryColor};
  }
`;

const StyledTextFieldWrapper = styled.div`
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: ${(props:IStyledLabelProperties) => (props.theme.sizes) ? props.theme.sizes.small : 12}px;
  display: block;
  margin-bottom: 8px;
  margin-left: 8px;
  color: ${(props:IStyledLabelProperties) => props.active ? props.theme.primaryColor : props.theme.primaryColorAccent};
  transition: .24s;
`;

const StyledTextFieldSubWrapper = styled.div`
  display: flex;
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid ${(props:IStyledTextFieldSubWrapperProperties) => props.active ? props.theme.primaryColor : props.theme.primaryColorAccent};
  transition: .24s;
  color: ${(props:IStyledTextFieldSubWrapperProperties) => props.active ? props.theme.primaryColor : props.theme.primaryColorAccent};
  fill: ${(props:IStyledTextFieldSubWrapperProperties) => props.active ? props.theme.primaryColor : props.theme.primaryColorAccent};
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`;

interface ITextFieldProperties {
    placeholder?: string;
    label?: string;
    type?: string;
    startAdornment?: any;
    endAdornment?: any;
    onChange?: (event: any) => void;
    value?: string|number;
}

export default function TextField(props:ITextFieldProperties) {
    const {placeholder, label, type = 'text', startAdornment, endAdornment, onChange = (event:any) => {}, value} = props;
    const {theme} = useContext(Theme);
    const [active, setActive] = useState<boolean>(false)

    return (
        <StyledTextFieldWrapper>
            <StyledLabel active={active} theme={theme}>
                {label}
            </StyledLabel>
            <StyledTextFieldSubWrapper theme={theme} active={active}>
                {startAdornment && startAdornment}
                <StyledTextField
                    active={active}
                    onBlur={() => setActive(false)}
                    onFocus={() => setActive(true)}
                    type={type}
                    value={value}
                    onChange={(event:any) => onChange(event)}
                    placeholder={placeholder}
                    theme={theme}/>
                {endAdornment && endAdornment}
            </StyledTextFieldSubWrapper>
        </StyledTextFieldWrapper>);
}