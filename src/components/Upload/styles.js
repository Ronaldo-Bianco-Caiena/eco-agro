import styled, { css } from "styled-components";

const dragActive = css`
    border-color: #99C24D;
`;
const dragReject = css`
    border-color: #DC493A;
`;

export const DropContainer = styled.div.attrs({
    classname: "dropzone"
})`
    border: 2px dashed #3E4A5B;
    border-radius: 4px;
    cursor: pointer;

    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`;
const messageColors = {
    default: '#3E4A5B',
    error: '#DC493A',
    success: '#99C24D',
}

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 15px 0px 15px 0px;
    margin: 0;
    font-size: 20px;
`;