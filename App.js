
import React from 'react';
import Item from './components/Item/Item'
import {
  SafeAreaView,

  Text,
 
} from 'react-native';
import MyText from './components/Item/Text/mytext';

import Form from './components/Form/form_field';



const App = () =>{
  return (
<SafeAreaView>
<Form/>
<MyText/>
</SafeAreaView>
  );
};

export default App;
