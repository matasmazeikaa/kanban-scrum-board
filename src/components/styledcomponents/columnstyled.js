import Styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

const Container = Styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: #D1D1D1;
`;
const Title = Styled.h3`
    padding: 8px;
`;
const TaskList = Styled.div`
    padding: 8px;
`;
const TextArea = Styled(Textarea)`
    resize: none;
    width: 100%;
    overflow: hidden;
`

export {Container, Title, TaskList, TextArea};