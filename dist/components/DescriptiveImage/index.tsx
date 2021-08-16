import React, {useContext} from "react";
import {ITheme, Theme} from "../ThemeWrapper";
import styled, {CSSObject} from "styled-components";
import LazyImage from "../LazyImage";
import {hexToRGBA} from "../../utils/ColorUtils";

interface IDescriptiveImage {
    src: string;
    alt: string;
    disabled?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => {};
    label: string;
    children: any;
    style?: CSSObject;
    className?: string;
    wrapperClass?: string;
    wrapperStyle?: CSSObject;
    disabledElement?:any;
    descriptionStyle?: CSSObject;
    descriptionClassName?: string;
}

interface IStyleProps {
    theme: ITheme;
    disabled?: boolean;
}

const DescriptiveImageWrapper = styled.div`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  cursor: pointer;
`;

const DisabledDescriptiveImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${(props:IStyleProps) => hexToRGBA(props.theme.secondaryColorAccent, .46)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DescriptiveImageChildrenWrapper = styled.div`
  position: absolute;
  padding: 8px;
  background-color: ${(props:IStyleProps) => hexToRGBA(props.theme.secondaryColor, .6)};
  color: ${(props:IStyleProps) => props.theme.secondaryColorAccent};
  width: 100%;
  bottom: 0;
  left: 0;
`;

const DescriptiveImageLabel = styled.p`
  font-size: ${(props:IStyleProps) => (props.theme?.sizes?.large) ? props.theme.sizes.large : 12}px;
`;

const DescriptiveImageChildrenWrapperChildren = styled.div`
  position: relative;
  word-break: break-word;
`;

const DescriptiveImageSubWrapper = styled.div`
  padding: 8px;
`;

export default function DescriptiveImage(props:IDescriptiveImage) {
    const {
        src,
        alt,
        disabled = false,
        disabledElement,
        onMouseEnter = () => {},
        onMouseLeave = () => {},
        onClick = () => {},
        label,
        children,
        style,
        className,
        descriptionStyle = {},
        descriptionClassName = '',
        wrapperStyle = {},
        wrapperClass} = props;
    const {theme} = useContext(Theme);

    const handleClick = () => {
        if (!disabled) {
            onClick()
        }
    }

    return (
        <DescriptiveImageWrapper
            theme={theme}
            className={wrapperClass}
            style={wrapperStyle}>
            <LazyImage
                className={className}
                style={style}
                onClick={() => handleClick()}
                onMouseLeave={() => onMouseLeave()}
                onMouseEnter={() => onMouseEnter()}
                src={src}
                alt={alt}/>
            {disabled &&
            <DisabledDescriptiveImage theme={theme}>
                {disabledElement && disabledElement}
            </DisabledDescriptiveImage>}
            <DescriptiveImageChildrenWrapper
                style={descriptionStyle}
                className={descriptionClassName}
                theme={theme}>
                <DescriptiveImageSubWrapper>
                    <DescriptiveImageLabel theme={theme}>
                        {label}
                    </DescriptiveImageLabel>
                    <DescriptiveImageChildrenWrapperChildren
                    >
                        {children}
                    </DescriptiveImageChildrenWrapperChildren>
                </DescriptiveImageSubWrapper>
            </DescriptiveImageChildrenWrapper>
        </DescriptiveImageWrapper>
    )
}