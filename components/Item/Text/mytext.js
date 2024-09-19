import React from 'react';

import {Text} from 'react-native';


const MyText = ()=>{
    const handleTextClick = ()=>{
        alert('The text has been clicked!');
    };
    return (
        <Text onPress={()=> handleTextClick()}>
            Hello, React Native World!
        </Text>
    );
};

export default MyText;
