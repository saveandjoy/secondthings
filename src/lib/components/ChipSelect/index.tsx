import React, {useContext, useEffect, useState} from "react";
import {IDataCell} from "../../Models/FormInput";
import styled from "styled-components";
import {ITheme, Theme} from "../ThemeWrapper";
import Chip from "../Chip";
import {NEUTRAL, PRIMARY} from "../../constants/ThemeWrapper";

interface IChipSelect {
    dataset: IDataCell[];
    label: string;
    onChange: (ids:string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    value: string[]|number[];
}

interface IStyledLabelProperties {
    theme: ITheme;
    placeholderActive: boolean;
}

const StyledChipSelectWrapper = styled.div`
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: ${(props:IStyledLabelProperties) => (props.theme.sizes) ? props.theme.sizes.small : 12}px;
  display: block;
  margin-bottom: 4px;
  margin-left: 8px;
`;

const StyledChipSelectChipWrapper = styled.div`
  display: flex;
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

export default function ChipSelect(props:IChipSelect) {
    const {dataset, label, onChange = () => {}, placeholder, disabled, value} = props;
    const [selected, setSelected] = useState<string[]>([]);
    const {theme} = useContext(Theme);

    useEffect(() => {
        if (selected.length === 0 && value.length > 0) {
            setSelected([...value].map(val => { return val.toString()}))
        }
    }, [value])

    const handleClick = (id:string) => {
        if (!disabled) {
            const copySelected = [...selected].filter(value => {
                return value !== id;
            });
            if (copySelected.length === selected.length) {
                copySelected.push(id);
            }
            setSelected(copySelected);
            onChange(copySelected);
        }
    }

    return (
        <StyledChipSelectWrapper>
            <StyledLabel placeholderActive={!selected.length} theme={theme}>
                {label}
            </StyledLabel>
            <StyledPlaceholderLabel placeholderActive={!selected.length} theme={theme}>
                {placeholder}
            </StyledPlaceholderLabel>
            <StyledChipSelectChipWrapper>
                {(dataset && dataset.length) &&
                    dataset.map((cell:IDataCell) => {
                        return (
                            <Chip
                                disabled={disabled}
                                onClick={() => handleClick(cell.value.toString())}
                                variant={selected.includes(cell.value.toString()) ? PRIMARY : NEUTRAL}
                            >
                                {cell.label.toString()}
                            </Chip>
                        )
                    })
                }
            </StyledChipSelectChipWrapper>
        </StyledChipSelectWrapper>
    )
}