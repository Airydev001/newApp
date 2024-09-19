
import React,{useRef} from 'react';
import Item from './components/Item/Item'
import {
  SafeAreaView,

  ScrollView,

  Text,

  Button,
 
} from 'react-native';
import MyText from './components/Item/Text/mytext';

import Form from './components/Form/form_field';



const App = () =>{
const handleClick = ()=>{
  scrollViewRef.current.scrollTo({
    x:0,
    y: 0,
    animated: true,
  });
};
  const scrollViewRef = useRef(null);
  return (
<SafeAreaView>
  <ScrollView ref={scrollViewRef}>
<Form/>
<MyText/>
<Button onPress = {handleClick} title = {"Scroll to Top"}/>
</ScrollView>
</SafeAreaView>
  );
};

export default App;
