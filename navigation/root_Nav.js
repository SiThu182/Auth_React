import React , { useState, useEffect}from 'react'
import { Text, View , Asy } from 'react-native';
import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/loginScreen';
import AsyncStorage from '@react-native-community/async-storage'
import { createStackNavigator } from "@react-navigation/stack";


const stack = createStackNavigator();


export default function root_Nav() {

    const [isLunch,setIsluch] = useState(null);

    useEffect(()=>{
        AsyncStorage.getItem('luched!').then((val)=>{
            if(val == null){
                AsyncStorage.setItem('luched','true');
                setIsluch(true);
            }else{
                setIsluch(false);
            }
        })
    },[])

    if(isLunch === null){
        return null
    }else if(isLunch){
        return(
            <stack.Navigator>
                <stack.Screen name="Intro" component={IntroScreen} 
                    options={{header:()=>null}}/>
                <stack.Screen name="Login" component={LoginScreen} 
                    options={{header:()=>null}}/>
            </stack.Navigator>
        )
    }else{
        return (
            <stack.Navigator>
                <stack.Screen name="Login" component={LoginScreen} 
                    options={{header:()=>null}}/>
            </stack.Navigator>
        )
    }
}

