import React from "react";
import styled from "styled-components";

interface IAdornmentProperties  {
    children: any;
    [x:string]: any;
}

const AdornmentWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 32px;
`;

export default function Adornment(props:IAdornmentProperties) {
    const {children} = props;
    return (
        <AdornmentWrapper {...props}>
            {children}
        </AdornmentWrapper>
    )
}