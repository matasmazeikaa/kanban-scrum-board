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

export { Container, TextArea };