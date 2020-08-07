import React from 'react'
import styled from 'styled-components/macro'

export const Container = styled.div`
  background-color: salmon;
`

const SampleWidget = () => {
  return <Container>It's a widget!</Container>
}

export default SampleWidget
