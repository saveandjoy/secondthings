import React, {useContext} from "react";
import {ITheme, Theme} from "../ThemeWrapper";
import styled from "styled-components";
import {NEUTRAL, PRIMARY, SECONDARY, WARNING} from "../../constants/ThemeWrapper";
import {hexToRGBA} from "../../utils/ColorUtils";

interface IIconButton {
    children:any;
    label?:string;
    variant?: string;
    disabled?: boolean;
    [x:string]: any;
}

function getVariantBG(theme:ITheme, variant:string) {
    switch (variant) {
        case PRIMARY:
            return theme.primaryColor;
        case SECONDARY:
            return theme.secondaryColor;
        case NEUTRAL:
            return theme.neutralColor;
        case WARNING:
            return theme.warningColor;
        default:
            return theme.primaryColor;
    }
}

function getVariantColor(theme: ITheme, variant:string) {
    switch (variant) {
        case PRIMARY:
            return theme.primaryColorAccent;
        case SECONDARY:
            return theme.secondaryColorAccent;
        case NEUTRAL:
            return theme.neutralColorAccent;
        case WARNING:
            return theme.warningColorAccent;
        default:
            return theme.primaryColorAccent;
    }
}

interface IIconButtonStyled {
    theme: ITheme;
    variant: string;
    disabled: boolean;
}

function getDimension(theme:ITheme) {
    if (theme && theme.sizes) {
         return `${theme.sizes.extraLarge * 2.5}px`;
    } else {
        return '48px'
    }
}

const IconButtonStyled = styled.button`
  width: ${(props:IIconButtonStyled) => getDimension(props.theme)};
  height: ${(props:IIconButtonStyled) => getDimension(props.theme)};
  min-width: ${(props:IIconButtonStyled) => getDimension(props.theme)};
  min-height: ${(props:IIconButtonStyled) => getDimension(props.theme)};
  max-width: ${(props:IIconButtonStyled) => getDimension(props.theme)};
  max-height: ${(props:IIconButtonStyled) => getDimension(props.theme)};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: ${(props:IIconButtonStyled) => getVariantBG(props.theme, props.variant)};
  color: ${(props:IIconButtonStyled) => getVariantColor(props.theme, props.variant)};
  fill: ${(props:IIconButtonStyled) => getVariantColor(props.theme, props.variant)};
  overflow: hidden;
  &:after {
    content: " ";
    width: 1px;
    height: 1px;
    opacity: 0;
    transition: .24s;
    background: rgba(255, 255, 255, .3);
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 3.6px;
    &:after {
      transform: scale(100);
      opacity: 1;
    }
  }
  &:disabled {
    border: 2px solid ${(props:IIconButtonStyled) => getVariantBG(props.theme, props.variant)};
    background: ${(props:IIconButtonStyled) => hexToRGBA(getVariantColor(props.theme, props.variant), .05)};
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const IconButtonInnerWrapper = styled.div`
  text-align: center;
`;

const IconButtonStyledLabel = styled.div`
  font-size: ${(props: IIconButtonStyled) => props.theme.sizes ? props.theme.sizes.small : 8}px;
  color: ${(props:IIconButtonStyled) => getVariantColor(props.theme, props.variant)}
`;

export default function IconButton(props:IIconButton) {
    const {children, label, variant = PRIMARY, disabled = false} = props;
    const {theme} = useContext(Theme);

    return (
        <IconButtonStyled {...props} aria-label={label ? label : ''} disabled={disabled} theme={theme} variant={variant}>
            <IconButtonInnerWrapper>
                <div>
                    {children}
                </div>
                {label &&
                <IconButtonStyledLabel disabled={disabled} variant={variant} theme={theme}>
                    {label}
                </IconButtonStyledLabel>}
            </IconButtonInnerWrapper>
        </IconButtonStyled>
    )
}