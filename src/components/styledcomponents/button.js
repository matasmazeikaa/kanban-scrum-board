import Styled from 'styled-components';

const Button = Styled.button`
    color: #fff;
    background-color: ${props => props.secondary ? '#dc3545' : '#28a745' };
    background-color: ${props => props.secondary ? '#dc3545' : '#28a745' };
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin: 8px;
    width: ${props => props.addcolumn ? '400px' : '45%'};
    height: ${props => props.addcolumn && '50px'};
`

export { Button };