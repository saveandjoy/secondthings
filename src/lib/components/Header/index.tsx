import React, {useContext} from "react";
import styled from "styled-components";
import {ITheme, Theme} from "../ThemeWrapper";

interface IHeader {
    children: any;
    position?: string;
}

interface IHeaderStyleWrapperProperties {
    theme: ITheme;
    position: string;
}

const HeaderStyledWrapper = styled.header`
  position: ${(props:IHeaderStyleWrapperProperties) => props.position};
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  padding: 8px 16px;
  background: ${(props:IHeaderStyleWrapperProperties) => props.theme.primaryColor};
  color: ${(props:IHeaderStyleWrapperProperties) => props.theme.primaryColorAccent};
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`;

export default function Header(props:IHeader) {
    const {children, position = 'fixed'} = props;
    const {theme} = useContext(Theme);

    return (
        <HeaderStyledWrapper position={position} theme={theme}>
            {children}
        </HeaderStyledWrapper>
    )
}