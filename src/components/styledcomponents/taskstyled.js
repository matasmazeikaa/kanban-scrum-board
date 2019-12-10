import Styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

const Container = Styled.div`
    border: 1px solid lightgray;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: #FFFFFF;
    overflow-wrap: break-word;
`

const Modal = Styled.div`
    display: block; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`

const ModalContent = Styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
    height: auto;
`

const Close = Styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover, &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`

const TextArea = Styled(Textarea)`
    resize: none;
    width: 100%;
    overflow: hidden;
`

export {Container, Modal, ModalContent, Close, TextArea};