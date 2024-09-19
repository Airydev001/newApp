import React from 'react';

import { SafeAreaView,Text,ScrollView} from 'react-native';


const MyText = ()=>{

    let array = Array( 500).fill(0);
    const handleTextClick = ()=>{
        alert('The text has been clicked!');
    };
    return (
        <SafeAreaView>
            <ScrollView>
        <Text onPress={()=> handleTextClick()}>
            {
                array.map((value, index)=>(
                    <Text key={index}>Hello Welcome to our world </Text>
                ))
            }
        </Text>
        </ScrollView>
        </SafeAreaView>
    );
};

export default MyText;
