import { Animated, TouchableWithoutFeedback } from 'react-native'
import React, { useRef, useCallback } from 'react'
import { FontAwesome } from "@expo/vector-icons"

const Button = ({ name, size, color, onPress, style }) => {
  
  const scale = useRef(new Animated.Value(1)).current;
  

   // Function to animate the scale of the button
  const animateScale = useCallback(
    (newValue)=>{
        Animated.spring(scale, { 
            toValue: newValue, 
         
            triction: 4,
         
            useNativeDriver: true,
        }).start(); 
    },
  [scale]);

  return (
    <TouchableWithoutFeedback
      // When the button is pressed down, animate the scale to 0.6
      onPressIn={()=>animateScale(0.6)}  
      
      delayPressIn={0} 
      
      onPressOut={()=>{ 
        animateScale(1),
      
        onPress() 
      }}
      // Delay before the onPressOut event is triggered
      delayPressOut={100} >
        <Animated.View style={{
            height: 60, width: 60,
            backgroundColor: "white",
            elevation: 5, borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: color,
            borderWidth: 1.2,
           
            transform: [{ scale }], 
            ...style
        }}>
            <FontAwesome name={name} size={size} color={color}/>
        </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default Button