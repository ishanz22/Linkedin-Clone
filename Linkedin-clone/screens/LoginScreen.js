import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageStore
} from 'react-native';

import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const image = [
  'https://miro.medium.com/max/2625/1*8QgPF5tXwo5NqhvXXncwSQ.png',
  'https://www.vectorgraphit.com/wp-content/uploads/2019/02/undraw_co-workers_ujs6-1024x764.png',
  'https://www.officernd.com/wp-content/uploads/2020/11/undraw_software_engineer_lvl5.png'
]

const WIDTCH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



const LoginScreen = ({navigation}) => {
  const {login, googleLogin, fbLogin} = useContext(AuthContext);
  const [imgActive, setimgActive] = useState(0)
  onchange = (nativeEvent) =>{
      if(nativeEvent){
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide != imgActive){
          setimgActive(slide);
        }
      }
  }
  return (
    <ScrollView>
      <Image
        source={require('../assets/LinkedIn-Logo.wine.png')}
        style={styles.logo}
      />
    <ScrollView contentContainerStyle={styles.container}>

    
  
  

     
     
      <View style={styles.wrap}>
        <ScrollView
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator ={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
        >
      
          {
            image.map((e, index) =>
            <Image
              key={e}
              resizeMode='stretch'
              style={styles.wrap}
              source={{uri: e}}
            />
            
            )
          }

          
        </ScrollView>
        
      </View>
      <Text style={styles.texta}>  Find and land your next Job</Text>
      <View style={styles.wrapDot}>
            {
              image.map((e, index) =>
              
              <Text key={e}
              style={imgActive == index ? styles.dotActive: styles.dot}>
            ●
              </Text>
              
               )
            
            }
            
        </View>
            
      

      <FormButton
        buttonTitle="Join now"
        onPress={() => navigation.navigate('Signup')}
      />

<SocialButton
            buttonTitle="Join with Google"
            btnType="google"
            color="grey"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />

  
<TouchableOpacity
        style={styles.SigninButton}
        onPress={() => navigation.navigate('LoginToSign')}>
        <Text style={styles.navButtonText}>
          Sign in
        </Text>
      </TouchableOpacity>
  
    

      </ScrollView>
    </ScrollView>
  );
};


export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  logo: {
    margin:4,
    height: 70,
    width: 150,
    resizeMode: 'cover',
  
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    
  },
  navButton: {
    marginTop: 15,
    
    
  },
  SigninButton: {
    marginVertical: 25,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
   
    fontWeight: 'bold',
   
    fontFamily: 'Lato-Regular',
  },
  wrap:{
    
    width:WIDTCH *0.80,
    height:HEIGHT * 0.35,
    borderRadius: 50

  },
  wrapDot:{
   
    bottom: 0,
    flexDirection:'row',
    alignSelf:'center'
    
  },
  dotActive:{
    margin: 3,
    color:'black'
  },
  dot:{
    
    margin: 3,
    color:'#A0ABA2'
  },
  texta:{
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: 17,
    marginBottom: 30,
    color: 'black',
    paddingTop:20,
    margin: 3,
    

    bottom: 0,
    flexDirection:'row',
    alignSelf:'center',

  }
});
