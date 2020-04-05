import React from 'react';
import {
  StatusBar,
  Animated,
  Image,
  AsyncStorage
} from 'react-native';
import HelloImg from "./assets/universe.png"
import DragImg from "./assets/drag.png"
import { PanGestureHandler, State } from "react-native-gesture-handler"
import { Container, Card, ImageContent } from "../style"



function App() {

  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  )

  function onHandlerStateChange(event) {

    if (event.nativeEvent.oldState === State.ACTIVE) {

      let opened = false;

      const { translationY } = event.nativeEvent;
      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setOffset(0);
        translateY.setValue(offset);
        offset = 0;
      }


      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });


    }
  }


  return (
    <>
      <StatusBar backgroundColor="#873590" />
      <Container>

        <ImageContent
          style={{
            opacity: translateY.interpolate({
              inputRange: [0, 190],
              outputRange: [0, 1],
              extrapolate: 'clamp'
            })
          }}
        >
          <Image source={HelloImg} style={{ width: 100, height: 100 }} />
        </ImageContent>

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              })
            }]
          }}>
            <Image source={DragImg} style={{ width: 120, height: 120 }} />
          </Card>
        </PanGestureHandler>
      </Container>
    </>
  )
}

export default App;


