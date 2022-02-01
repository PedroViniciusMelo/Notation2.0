import React,{useState,useRef,useNavigation} from 'react'
import {View, TouchableWithoutFeedback, Animated} from 'react-native'
import Circle from 'react-native-vector-icons/FontAwesome';
import IconNotas from "@expo/vector-icons/FontAwesome5"

const FAB = () => {
  const [isOpen,SetIsOpen] = useState(false)
  const toggleAnimation = useRef(new Animated.Value(0)).current
  

  const Navegar = () => {
    const navigator = useNavigation()
    navigator.navigate('Compromisso')
  }

  const startAnimtion = () => {
    
    const toValue = isOpen ? 0 : 1

    Animated.timing(toggleAnimation, {
      toValue:toValue,
      duration:200,
      useNativeDriver:true
    }).start();

    SetIsOpen(!isOpen)

  }

  return(
    <View>
    <TouchableWithoutFeedback>
       <Animated.View style={{
            transform:[
              {
                translateY:toggleAnimation.interpolate({
                  inputRange:[0,1],
                  outputRange:[0,-93]
                })
              }
            ],
            backgroundColor: "#006EFF",
            borderRadius: 18,
            width: 36,
            height: 36,
            position: "absolute",
            right: 15,
            bottom: 15,
            alignItems:'center',
            justifyContent:'center'
       }}>
          <Circle
             name='plus'
             color='white'
             size={20}
          />
       </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback>
       <Animated.View style={{
            transform:[
              {
                translateY:toggleAnimation.interpolate({
                  inputRange:[0,1],
                  outputRange:[0,-50]
                })
              }
            ],
            backgroundColor: "#006EFF",
            borderRadius: 18,
            width: 36,
            height: 36,
            position: "absolute",
            right: 15,
            bottom: 15,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row'
       }}>
          <IconNotas 
             name="pen-alt" 
             color={'white'} 
             size={20}
          />
          
       </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={()=>{startAnimtion()}}>
       <Animated.View style={{
            transform:[
              {
                rotate:toggleAnimation.interpolate({
                  inputRange:[0,1],
                  outputRange:['0deg','45deg']
                })
              }
            ],
            backgroundColor: "#006EFF",
            borderRadius: 23,
            width: 46,
            height: 46,
            position: "absolute",
            right: 10,
            bottom: 10,
            alignItems:'center',
            justifyContent:'center'
       }}>
          <Circle
             name='plus'
             color='white'
             size={30}
          />
          
       </Animated.View>
    </TouchableWithoutFeedback>
 </View>
  )
}

const App = () =>{
  return(
    <FAB/>
  )
}

export default App;
