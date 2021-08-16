import React, {useContext} from "react";
import {ITheme, Theme} from "../ThemeWrapper";
import {NEUTRAL, PRIMARY, SECONDARY, WARNING} from "../../constants/ThemeWrapper";
import styled, {CSSObject} from 'styled-components'
import {hexToRGBA} from "../../utils/ColorUtils";

interface IButton {
    children: string;
    icon?: any;
    variant:string;
    onClick: () => void;
    disabled?: boolean;
    style?: CSSObject;
}

interface IButtonProps {
    variant: any;
    disabled: boolean;
    theme: ITheme;
}

function getBgColor(variant:string, theme: ITheme):string {
    switch (variant) {
        case PRIMARY:
            return theme.primaryColor;
        case SECONDARY:
            return theme.secondaryColor;
        case WARNING:
            return theme.warningColor;
        case NEUTRAL:
            return theme.neutralColor;
        default:
            return theme.primaryColor;
    }
}

function getFontColor(variant:string, theme: ITheme):string {
    switch (variant) {
        case PRIMARY:
            return theme.primaryColorAccent;
        case SECONDARY:
            return theme.secondaryColorAccent;
        case WARNING:
            return theme.warningColorAccent;
        case NEUTRAL:
            return theme.neutralColorAccent;
        default:
            return theme.primaryColorAccent;
    }
}


const StyledButton = styled.button`
    background: ${(props:IButtonProps) => getBgColor(props.variant, props.theme)};
    color: ${(props:IButtonProps) => getFontColor(props.variant, props.theme)};
    min-width: 88px;
    padding: 8px 16px;
    border-radius: 16px;
    border: 0;
    display: inline-flex;
    align-items: center;
    transition: .24s;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    font-size: ${(props:IButtonProps) => (props.theme && props.theme.sizes) ? props.theme.sizes.medium : 12}px;
    &:disabled {
      border: 2px solid ${(props:IButtonProps) => getBgColor(props.variant, props.theme)};
      background: ${(props:IButtonProps) => hexToRGBA(getFontColor(props.variant, props.theme), .05)};
      cursor: not-allowed;
      box-shadow: none;
    }
   &:after {
     content: ' ';
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     transition: .24s;
     border-radius: 0;
   }
   &:hover {
     &:after {
       background: rgba(0, 0, 0, .03);
     } 
   &:active {
     box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 3.6px;
     &:after {
       background: rgba(255, 255, 255, .3);
     }
   }  
   }`;

interface IStyledSpanProperties {
    icon: any;
    disabled: boolean;
}

const StyledSpan = styled.span`
  text-transform: uppercase;
  margin-left: ${(props:IStyledSpanProperties) => props.icon ? 4 : 0}px;
  font-weight: bolder;
  opacity: ${(props:IStyledSpanProperties) => props.disabled ? .6 : 1};
`;

export default function Button(props:IButton) {
    const {children, icon, variant = PRIMARY, onClick = () => {}, disabled = false, style} = props;
    const {theme} = useContext(Theme);

    return (
        <StyledButton
            style={style}
            theme={theme}
            variant={variant}
            disabled={disabled}
            onClick={() => onClick()}>
            {icon && icon}
            <StyledSpan disabled={disabled} icon={icon}>
                {children}
            </StyledSpan>
        </StyledButton>
    );
}