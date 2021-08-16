import React, {useContext, useState} from "react";
import {IDataCell} from "../../Models/FormInput";
import {ITheme, Theme} from "../ThemeWrapper";
import styled from "styled-components";

export interface ISelect {
    label: string;
    value: string|number;
    onChange: (event:any) => void;
    dataset: IDataCell[];
    disabled?: boolean
    placeholder?: string;
}


interface IStyledLabelProperties {
    theme: ITheme;
    active: boolean;
}

interface IStyledSelectFieldSubWrapperProperties {
    theme: ITheme;
    active: boolean;
}

const SelectFieldStyled = styled.select`
  width: 100%;
  font-size: ${(props:IStyledLabelProperties) => (props.theme.sizes) ? props.theme.sizes.medium : 12}px;
  outline: none;
  transition: .24s;
  border: 0;
  background: transparent;
  &:focus {
    border-color: ${(props:IStyledLabelProperties) => props.theme.primaryColor};
  }
`;

const StyledSelectFieldWrapper = styled.div`
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

const StyledSelectFieldSubWrapper = styled.div`
  display: flex;
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid ${(props:IStyledSelectFieldSubWrapperProperties) => props.active ? props.theme.primaryColor : props.theme.primaryColorAccent};
  transition: .24s;
  color: ${(props:IStyledSelectFieldSubWrapperProperties) => props.active ? props.theme.primaryColor : props.theme.primaryColorAccent};
  fill: ${(props:IStyledSelectFieldSubWrapperProperties) => props.active ? props.theme.primaryColor : props.theme.primaryColorAccent};
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`;

const SelectFieldStyledOption = styled.option``;

export default function Select(props:ISelect) {
    const {label, value, onChange = () => {}, dataset, disabled = false, placeholder} = props;
    const {theme} = useContext(Theme);
    const [active, setActive] = useState<boolean>(false);

    return (
        <StyledSelectFieldWrapper>
            <StyledLabel active={active} theme={theme} aria-label={label}>
                {label}
            </StyledLabel>
            <StyledSelectFieldSubWrapper theme={theme} active={active}>
                <SelectFieldStyled
                    active={active}
                    onBlur={() => setActive(false)}
                    onFocus={() => setActive(true)}
                    value={value}
                    onChange={(event:any) => onChange(event.target.value)}
                    placeholder={placeholder}
                    theme={theme}>
                    {(dataset && dataset.length) &&
                        dataset.map((row:IDataCell) => {
                            return (
                                <SelectFieldStyledOption value={row.value}>
                                    {row.label}
                                </SelectFieldStyledOption>)
                        })
                    }
                </SelectFieldStyled>
            </StyledSelectFieldSubWrapper>
        </StyledSelectFieldWrapper>);
}
