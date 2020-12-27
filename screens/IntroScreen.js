import React from 'react'
import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function IntroScreen({navigation}) {

    const Done =({...props})=>{
        return(
            <TouchableOpacity style={{marginRight:15}} {...props}>
                <Text style={{fontSize:14}}>Finish</Text>
            </TouchableOpacity>
        )
    }

    const Skip =({...props})=>{
        return(
            <TouchableOpacity style={{marginLeft:15}} {...props}>
                <Text style={{fontSize:14}}>Skip</Text>
            </TouchableOpacity>
        )
    }

    const Next =({...props})=>{
        return(
            <TouchableOpacity style={{marginRight:15}} {...props}>
                <Text style={{fontSize:14}}>Next</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Onboarding
            NextButtonComponent={Next}
            SkipButtonComponent={Skip}
            DoneButtonComponent={Done}
            onSkip={()=>navigation.replace('Login')}
            onDone={()=>navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#EEF2FE',
                    image: <Image source={require('../assets/images/learn_01.jpg')} 
                        style={styles.Image}
                        />,
                    title: 'Screen 1',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#FFFFFF',
                    image: <Image source={require('../assets/images/learn_02.png')} 
                        style={styles.Image}
                        />,
                    title: 'Screen 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/images/learn_03.jpg')} 
                        style={styles.Image}
                        />,
                    title: 'Screen 3',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
            />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    Image:{
        width:wp(50),
        height:hp(30)
    }
})
