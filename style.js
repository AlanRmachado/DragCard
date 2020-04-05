import styled from "styled-components/native"
import { Animated } from "react-native"




export const Content = styled.View`
  flex : 1;
  max-height : 300px;
`




export const ImageContent = styled(Animated.View)`
  width : 160px;
  height : 160px;
  justify-content : center;
  align-items : center;
  margin-top : -150px;
`



export const Container = styled.View`
  flex : 1;
  background : #873590;
  justify-content : center;
  align-items : center;
`

export const Card = styled(Animated.View)`
  flex: 1;
  background: #FFF;
  border-radius: 4px;
  margin: 0 20px;
  height: 300px;
  position: absolute;
  left: 0;
  right: 0;
  top: 200px;
  justify-content : center;
  align-items : center;
`

