import React from 'react'
import styled from 'styled-components'

const StyledSpacer = styled.div`
  height: ${(props) => props.size || '30px'};
`
const Spacer = ({ size }) => {
  return <StyledSpacer size={size} />
}

export default Spacer
