import React, {useContext} from "react";
import styled from "styled-components";
import {ITheme, Theme} from "../ThemeWrapper";

interface IContainer {
    children:any;
}

interface IContainerProperties {
    theme: ITheme;
}

const ContainerStyledWrapper = styled.div`
  background: black;
  padding: 16px;
  background: ${(props:IContainerProperties) => props.theme.white};
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`;

export default function Container(props:IContainer) {
    const {children} = props;
    const {theme} = useContext(Theme);
    return (
        <ContainerStyledWrapper theme={theme}>
            {children}
        </ContainerStyledWrapper>
    )
}