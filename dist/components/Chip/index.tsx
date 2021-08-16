import React, {useContext} from "react";
import styled from "styled-components";
import {ITheme, Theme} from "../ThemeWrapper";
import {NEUTRAL, PRIMARY, SECONDARY, WARNING} from "../../constants/ThemeWrapper";

interface ChipStyleProperties {
    theme: ITheme;
    variant: string;
    disabled?: boolean;
}

interface IChip {
    variant?: string;
    children: string;
    onClick?: () => void;
    disabled?: boolean;
}

function getVariantBGColor(variant:string, theme: ITheme) {
    switch (variant) {
        case PRIMARY:
            return theme.primaryColor;
        case SECONDARY:
            return theme.secondaryColor;
        case WARNING:
            return theme.warningColor;
        case NEUTRAL:
            return theme.neutralColor;
    }
}

function getVariantFontColor(variant:string, theme: ITheme) {
    switch (variant) {
        case PRIMARY:
            return theme.primaryColorAccent;
        case SECONDARY:
            return theme.secondaryColorAccent;
        case WARNING:
            return theme.warningColorAccent;
        case NEUTRAL:
            return theme.neutralColorAccent;
    }
}

function getBorder(variant:string, theme: ITheme) {
    if (variant === NEUTRAL) {
        return `1px solid ${theme.neutralColorAccent}`;
    } else {
        return '1px solid transparent';
    }
}

const ChipStyledWrapper = styled.div`
  padding: 8px 16px;
  background: ${(props:ChipStyleProperties) => getVariantBGColor(props.variant, props.theme)};
  color: ${(props:ChipStyleProperties) => getVariantFontColor(props.variant, props.theme)};
  border-radius: 16px;
  text-align: center;
  display: inline-flex;
  cursor: ${(props:ChipStyleProperties) => props.disabled ? 'not-allowed' : 'pointer'};
  margin: 4px;
  transition: .24s;
  border: ${(props:ChipStyleProperties) => getBorder(props.variant, props.theme)};
  user-select: none;
`;

export default function Chip(props:IChip) {
    const {variant = PRIMARY, children, onClick = () => {}, disabled} = props;
    const {theme} = useContext(Theme);

    const handleClick = () => {
        if (!disabled) {
            onClick();
        }
    }

    return (
        <ChipStyledWrapper
            disabled={disabled}
            onClick={() => handleClick()}
            theme={theme}
            variant={variant}>
            <span>
                {children}
            </span>
        </ChipStyledWrapper>
    )
}