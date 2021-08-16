import React, {useContext} from "react";
import styled from "styled-components";
import {ITheme, Theme} from "../ThemeWrapper";

interface IFooter {
    children: any;
}

interface IFooterStyleWrapperProperties {
    theme: ITheme;
}

const FooterStyledWrapper = styled.header`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  padding: 8px 16px;
  background: ${(props:IFooterStyleWrapperProperties) => props.theme.primaryColor};
  color: ${(props:IFooterStyleWrapperProperties) => props.theme.primaryColorAccent};
  box-shadow: rgb(0 0 0 / 15%) 0 -1.95px 2.6px;
`;

export default function Footer(props:IFooter) {
    const {children} = props;
    const {theme} = useContext(Theme);

    return (
        <FooterStyledWrapper theme={theme}>
            {children}
        </FooterStyledWrapper>
    )
}