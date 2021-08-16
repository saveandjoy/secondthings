import React, {useContext, useState} from "react";
import styled from "styled-components";
import {ITheme, Theme} from "../ThemeWrapper";

interface IStyledLabelProperties {
    theme: ITheme;
    active: boolean;
}

interface IStyledTextAreaWrapperProperties {
    theme: ITheme;
    active: boolean;
}

const StyledTextArea = styled.textarea`
  width: 100%;
  font-size: ${(props:IStyledLabelProperties) => props.theme?.sizes ? props.theme.sizes.medium : 12}px;
  outline: none;
  transition: .24s;
  border: 0;
  &:focus {
    border-color: ${(props:IStyledLabelProperties) => props.theme.primaryColor};
  };
  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`;

const StyledTextAreaWrapper = styled.div`
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: ${(props:IStyledLabelProperties) => props.theme?.sizes ? props.theme.sizes.small : 12}px;
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
  border: 1px solid ${(props:IStyledTextAreaWrapperProperties) => props.active ? props.theme.primaryColor : props.theme.primaryColorAccent};
  transition: .24s;
  color: ${(props:IStyledTextAreaWrapperProperties) => props.active ? props.theme.primaryColor : props.theme.primaryColorAccent};
  fill: ${(props:IStyledTextAreaWrapperProperties) => props.active ? props.theme.primaryColor : props.theme.primaryColorAccent};
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;

`;

interface ITextAreaProperties {
    placeholder?: string;
    label?: string;
    onChange?: (event: any) => void;
    value?: string;
    disabled?: boolean;
}

export default function TextArea(props:ITextAreaProperties) {
    const {placeholder, label, onChange = (event:any) => {}, disabled, value} = props;
    const {theme} = useContext(Theme);
    const [active, setActive] = useState<boolean>(false)

    return (
        <StyledTextAreaWrapper>
            <StyledLabel active={active} theme={theme}>
                {label}
            </StyledLabel>
            <StyledTextFieldSubWrapper theme={theme} active={active}>
                <StyledTextArea
                    active={active}
                    value={value}
                    disabled={disabled}
                    rows={5}
                    onBlur={() => setActive(false)}
                    onFocus={() => setActive(true)}
                    onChange={(event:any) => onChange(event.target.value)}
                    placeholder={placeholder}
                    theme={theme}/>
            </StyledTextFieldSubWrapper>
        </StyledTextAreaWrapper>);
}