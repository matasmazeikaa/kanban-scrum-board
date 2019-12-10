import Styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

const Container = Styled.div`
    display: flex;
`

const TextArea = Styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
`

const AddColumnButton = Styled.button`
  width: 400px;
  height: 50px;
  margin-top: 8px;
`

export {Container, TextArea, AddColumnButton};