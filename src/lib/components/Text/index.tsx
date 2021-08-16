import React from "react";

interface IText {
    children: string;
    style?: ElementCSSInlineStyle
}

export default function Text(props:IText) {
    const {children, style = {}} = props;

    const defaultStyle = {
        fontSize: 12
    }

    return (
        <p style={style?style:defaultStyle}>
            {children}
        </p>
    )
}