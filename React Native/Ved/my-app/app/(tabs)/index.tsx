import { Image } from 'expo-image';
import { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet ,Text,TextInput,TouchableOpacity,View } from 'react-native';


export default function HomeScreen() {

  const [data,setData] = useState("")

  return (
   <>
   <SafeAreaView style={{flex:1}}>
     {/* <View style={styles.main}>
      <Text style={styles.header}>Login</Text>
      <TextInput style={styles.input} onChangeText={setData} placeholder='Username'/>
      <TextInput style={styles.input} placeholder='Password'/>

      <TouchableOpacity>
        <Text style={styles.btn}>Submit Button</Text>
      </TouchableOpacity>
    </View> */}

    
   </SafeAreaView>
   </>
  );
}


const styles = StyleSheet.create({
   main:{
      alignContent:"center",
      margin:30,
    },
    input :{
        color:"red",
        padding:20,
        height:20,
        marginBottom:20,
        borderWidth:1
    },
    header:{
      textAlign:"center",
      fontSize:30,
      margin:20
    },
    btn:{
      borderWidth:1,
      padding:10,
      borderRadius:10,
      backgroundColor:"blue",
      color:"white",
      textAlign:"center"
    }
   

})
