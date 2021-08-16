import React, {useContext, useEffect} from "react";
import styled, {keyframes} from "styled-components";
import {ITheme, Theme} from "../ThemeWrapper";
import {hexToRGBA} from "../../utils/ColorUtils";
import Button from "../Button";
import {NEUTRAL} from "../../constants/ThemeWrapper";

interface IModal {
    children: any;
    open: boolean;
    headerChildren?: any;
    onClose: () => void;
}

interface IModelStyledWrapperProperties {
    theme: ITheme;
}

const PopUpAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const SlideUpAnimation = keyframes`
  0% {bottom: -200vh; opacity: 1;}
  100% {bottom: 0; opacity: 1;}
`;

const ModelStyledWrapper = styled.dialog`
  width: ${window.innerWidth + 14}px;
  height: ${window.innerHeight + 4}px;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props:IModelStyledWrapperProperties) => hexToRGBA(props.theme.secondaryColor, .3)};
  z-index: 10;
  animation: ${PopUpAnimation} .3s ease;
  overflow: hidden;
  padding: 0;
  margin: 0;
  border: 0;
`;

const ModelContainerStyledWrapper = styled.div`
  width: 100vw;
  height: 100%;
  animation: ${SlideUpAnimation} 1s ease-in;
  position: absolute;
  top: 0;
  left: 0;
`;

const ModelContainerHeaderStyledWrapper = styled.div`
  width: 100vw;
  padding: 16px 8px;
  display: flex;
  align-items: center;
  background: ${(props:IModelStyledWrapperProperties) => props.theme.secondaryColor};
  color: ${(props:IModelStyledWrapperProperties) => props.theme.secondaryColorAccent};
  justify-content: space-between;
`;

const ModalContainerChildrenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 8px;
  background: white;
`;

export default function Modal(props:IModal) {
    const {open, children, headerChildren, onClose} = props;
    const {theme} = useContext(Theme);

    useEffect(() => {
        const body = document.body;
        if (open) {
            setTimeout(() => {
                body.style.overflow = 'hidden';
                //body.style.position = 'fixed';
            }, 300);
        } else {
            setTimeout(() => {
                body.style.overflow = '';
                body.style.position = '';
            }, 100);
        }
    }, [open])

    if (open) {
        return (
            <ModelStyledWrapper theme={theme} open={open}>
                <ModelContainerStyledWrapper>
                    <ModelContainerHeaderStyledWrapper theme={theme}>
                        {headerChildren && headerChildren}
                        <Button
                            style={{
                                minWidth: 0,
                                marginRight: 16
                            }}
                            variant={NEUTRAL} onClick={() => onClose()}>
                            X
                        </Button>
                    </ModelContainerHeaderStyledWrapper>
                    <ModalContainerChildrenWrapper>
                        {children}
                    </ModalContainerChildrenWrapper>
                </ModelContainerStyledWrapper>
            </ModelStyledWrapper>
        )
    } else {
        return <></>;
    }
}