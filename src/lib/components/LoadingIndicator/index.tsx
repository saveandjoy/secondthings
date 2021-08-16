import React, {useContext} from "react";
import styled, {keyframes} from "styled-components";
import {ITheme, Theme} from "../ThemeWrapper";

interface ILoadingIndicatorProps {
    theme: ITheme;
}

const breatheAnimation = keyframes`
 0% { height: 68px; width: 68px; min-height: 68px; min-width: 68px; max-height: 68px; border-radius: 34px; opacity: 1}
 50% { height: 34px; width: 34px; min-height: 34px; min-width: 34px; max-height: 34px; border-radius: 17px; opacity: .5} 
  100% { height: 68px; width: 68px; min-height: 68px; min-width: 68px; max-height: 68px; border-radius: 34px; opacity: 1}
`;

const rotateAnimation = keyframes`
  0% {transform: rotate(0deg); opacity: 1;}
  50% {transform: rotate(180deg); opacity: 0;}
  100% {transform: rotate(360deg); opacity: 1;}
`;

const StyledLoadingIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 3px ${(props:ILoadingIndicatorProps) => props.theme.primaryColor} solid;
  animation: ${breatheAnimation};
  animation-duration: 2.4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: none;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledInnerIndicator = styled.div`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  max-width: 24px;
  max-height: 24px;
  border-radius: 12px;
  border: 4px solid ${(props:ILoadingIndicatorProps) => props.theme.secondaryColor};
  animation: ${rotateAnimation};
  animation-duration: 2.4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: none;
`;

const StyledLoadingIndicatorWrapper = styled.div`
  position: absolute;
  text-align: center;
`;

export default function LoadingIndicator() {
    const {theme} = useContext(Theme);
    return (
        <StyledLoadingIndicatorWrapper>
            <StyledLoadingIndicator theme={theme}>
                <StyledInnerIndicator theme={theme}/>
            </StyledLoadingIndicator>
        </StyledLoadingIndicatorWrapper>
    )
}