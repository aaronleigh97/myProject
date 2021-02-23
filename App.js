import React, { Component, useState, useEffect } from 'react';
import { Text, View } from 'react-native';



 class SayHello extends Component {

   static Blink = (props) => {
    const [isShowingText, setIsShowingText] = useState(true);

    useEffect(() => {
      const toggle = setInterval(() => {
        setIsShowingText(!isShowingText);
      }, 1000); 

      return () => clearInterval(toggle);
    })

    if (!isShowingText) {
      return null;
    }
    
  }
    render(){
      return (
        <View>
          <Text>Hello {this.props.name}</Text>
       </View>
    )
  };
}

class HelloWorldApp extends Component {
  render(){
    return (
        <View>
          <SayHello name="Ash" />
          <SayHello name="Bitch" />
          <SayHello name="Mat" />
        </View>
    );
  }

}

export default HelloWorldApp