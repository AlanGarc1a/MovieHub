import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 110rem;
    margin: 0 auto;
    padding-right: 3rem;
    padding-left: 3rem;
`;

export const Container: React.FC = ({children}) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default Container;