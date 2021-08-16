import React, {useContext, useEffect, useRef, useState} from "react";
import {CSSObject} from "styled-components";
import {Theme} from "../ThemeWrapper";

interface IImageProperties {
    src: string;
    alt:string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    style?: CSSObject;
    className?: string;
}

export default function LazyImage(props:IImageProperties) {
    const {src, alt, onMouseEnter = () => {}, onMouseLeave = () => {}, onClick = () => {}, style = {}, className = ''} = props;
    const [image, setImage] = useState<string|null>(null);
    const {viewPortY} = useContext(Theme);
    const ref = useRef<HTMLImageElement|null>(null);
    const [currentYPosition, setCurrentYPosition] = useState<number|null>(null);
    const show = currentYPosition && (currentYPosition - viewPortY) < window.innerHeight + 128;
    useEffect(() => {
        if (ref.current) {
            const currentYPositionOfRef = ref.current?.getBoundingClientRect().top;
            if (!currentYPosition) {
                setCurrentYPosition(currentYPositionOfRef)
            }
        }
    }, []);

    useEffect(() => {
        if (!image) {
            let image = new Image();
            image.src = src;
            image.onload = () => {
                setImage(src);
            }
        }
    }, [show])

    return (
    <>
        <img
            ref={ref}
            loading={'lazy'}
            className={className}
            style={Object.assign({}, style, {opacity: image ? 1 : 0, transition: '1s'})}
            onClick={() => onClick()}
            onMouseLeave={() => onMouseLeave()}
            onMouseEnter={() => onMouseEnter()}
            alt={alt}
            src={(image && show) ? image : ''}/>
    </>)
}