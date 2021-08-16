import React, {useContext, useEffect, useState} from "react";
import {DataCell, IDataCell} from "../../Models/FormInput";
import styled from "styled-components";
import {ITheme, Theme} from "../ThemeWrapper";

interface IStyledLabelProperties {
    theme: ITheme;
    placeholderActive: boolean;
    disabled?: boolean
}

interface IButtonSelect {
    dataset: DataCell[];
    label: string;
    placeholder: string|undefined;
    value: string[];
    onChange: (values:string[]) => void;
    disabled?: boolean;
}

interface IButtonCell {
    theme: ITheme;
    isSelected: boolean;
    isLast: boolean;
}

const ButtonSelectStyledWrapper = styled.div`
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: ${(props:IStyledLabelProperties) => (props.theme.sizes) ? props.theme.sizes.small : 12}px;
  display: block;
  margin-bottom: 4px;
  margin-left: 8px;
`;

const StyledPlaceholderLabel = styled.label`
  font-size: ${(props:IStyledLabelProperties) => props.theme.sizes?.small}px;
  margin-left: 8px;
  margin-bottom: 8px;
  font-style: italic;
  display: block;
  opacity: ${(props:IStyledLabelProperties) => props.placeholderActive ? 1 : 0};
  transition: .24s;
`;

const ButtonSelectWrapper = styled.div`
  border-radius: 16px;
  display: inline-flex;
  overflow: hidden;
  box-shadow: ${(props:IStyledLabelProperties) => props.disabled ? 'none' : 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;'};
  transition: .24s;
`;

const ButtonCell = styled.button`
    font-size: ${(props:IButtonCell) => props.theme.sizes?.medium}px;
    padding: 8px 16px;
    background: ${(props:IButtonCell) => props.isSelected ? props.theme.primaryColor : props.theme.neutralColor};
    color: ${(props:IButtonCell) => props.isSelected ? props.theme.primaryColorAccent : props.theme.neutralColorAccent};
    outline: none;
    border-top: 0;
    border-bottom: 0;
    border-left: 0;
    position: relative;
    border-right: ${(props:IButtonCell) => props.isLast ? '0px' : '1px'};
    border-style: solid;
    border-color: ${(props:IButtonCell) => props.theme.primaryColor};
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      opacity: .34;
    }
`;

export default function ButtonSelect(props:IButtonSelect) {
    const {dataset, label, placeholder, value, onChange = () => {}, disabled = false} = props;
    const {theme} = useContext(Theme);
    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
        if (!selected.length && value) {
            setSelected([...value].map(val => { return val.toString()}))
        }
    }, [value]);

    const handleClick = (value:string) => {
        if (!disabled) {
            let copySelected = [...selected].filter(cell => {
                return cell !== value;
            });
            if (copySelected.length === selected.length) {
                copySelected.push(value);
            }
            onChange(copySelected);
            setSelected(copySelected);
        }
    }

    return (
        <ButtonSelectStyledWrapper>
            <StyledLabel placeholderActive={!selected.length} theme={theme}>
                {label}
            </StyledLabel>
            <StyledPlaceholderLabel theme={theme} placeholderActive={!selected.length}>
                {placeholder}
            </StyledPlaceholderLabel>
            <ButtonSelectWrapper disabled={disabled} theme={theme} placeholderActive={!selected.length}>
                {dataset && dataset.map((cell:IDataCell, index:number) => {
                    return (
                        <ButtonCell
                            disabled={disabled}
                            isLast={index === dataset.length-1}
                            onClick={() => handleClick(cell.value.toString())}
                            theme={theme}
                            isSelected={selected.includes(cell.value.toString())}>
                            {cell.label}
                        </ButtonCell>
                    )
                })}
            </ButtonSelectWrapper>
        </ButtonSelectStyledWrapper>
    )
}