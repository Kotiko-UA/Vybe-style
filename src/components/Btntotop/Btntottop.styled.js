import styled from 'styled-components';

export const Button = styled.button`
display: ${props => props.$scroll === 'false' ? "none" : "block"};
cursor:pointer;
position: fixed;
bottom:25px;
right: 25px;
width: 40px;
height: 40px;
border: 1px solid transparent;
border-radius: 10px;
background-color:${({ theme }) => theme.colorText};
transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background-color:${({ theme }) => theme.brandColor};
}
`