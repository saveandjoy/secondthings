import React, {useContext} from "react";
import styled from "styled-components";
import {ITheme, Theme} from "../ThemeWrapper";

interface IStyleProperties {
    theme: ITheme;
    value: boolean;
}

const StyledToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const StyledToggleToggleWrapper = styled.div`
  display: inline-flex;
  width: 48px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid ${(props:IStyleProperties) => props.value ? props.theme.primaryColor : props.theme.primaryColorAccent};
  align-items: center;
  padding: 4px;
  position: relative;
  background-color: ${(props:IStyleProperties) => props.value ? 'transparent' : props.theme.primaryColor};
  transition: .24s;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`;

const StyledToggleCircle = styled.div`
  display: inline-flex;
  width: 22px;
  height: 22px;
  min-width: 22px;
  min-height: 22px;
  max-width: 22px;
  max-height: 22px;
  border-radius: 11px;
  background: ${(props:IStyleProperties) => props.value ? props.theme.primaryColor : props.theme.primaryColorAccent};
  position: absolute;
  left: ${(props:IStyleProperties) => props.value ? 2 : 32}px;
  transition: .24s;
`;

const StyledLabel = styled.label`
  font-size: ${(props:IStyleProperties) => props.theme?.sizes ? props.theme.sizes.medium : 12}px;
  margin-left: 8px;
`;

interface IToggleProperties {
    value: boolean;
    label?: string;
    onChange?: (checked:boolean) => void;
}

export default function Toggle(props:IToggleProperties) {
    const {label, value, onChange = () => {}} = props;
    const {theme} = useContext(Theme);
    return (
        <StyledToggleWrapper aria-label={value ? 'Selected' : 'Un-selected'} onClick={() => onChange(!value)}>
            <StyledToggleToggleWrapper theme={theme} value={value}>
                <StyledToggleCircle theme={theme} value={value}/>
            </StyledToggleToggleWrapper>
            <StyledLabel theme={theme} value={value}>
                {label}
            </StyledLabel>
        </StyledToggleWrapper>
    )
}