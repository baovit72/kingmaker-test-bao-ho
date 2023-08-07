import style from 'styled-components';
export const Button = style.button`
    padding: 0;
    margin: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    &:hover{
        filter: brightness(1.2);
        opacity: 0.9;
    }
`;
