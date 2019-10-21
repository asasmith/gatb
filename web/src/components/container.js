import React from 'react'
import styled from 'styled-components'

export default function UContentContainer ({children}) {
  return (
    <Container>{children}</Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`
