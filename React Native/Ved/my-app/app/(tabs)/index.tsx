import { Image } from 'expo-image';
import { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet ,Text,TextInput,TouchableOpacity,View } from 'react-native';


export default function HomeScreen() {

  const [data,setData] = useState("")
  const [submitData , setSubmitData] = useState("")

  const handleSubmit = ()=>{
    setSubmitData(data)
    setData("")
  }

  return (
   <>
   <SafeAreaView style={{flex:1}}>
     <View style={styles.main}>
      <Text style={styles.header}>Login</Text>
      <TextInput 
      style={styles.input} 
       placeholder='Username'
       value={data}
       onChangeText={(text)=>setData(text)}
      />
      <TextInput style={styles.input} placeholder='Password'/>
      <TouchableOpacity>
        <Text style={styles.btn} onPress={handleSubmit}>Submit Button</Text>
      </TouchableOpacity>
      {/* <Text>My Input Data :- {submitData}</Text> */}
      {submitData ? <Text>My Input Data :- {submitData}</Text> : ""}
    </View>
   </SafeAreaView>
   </>
  );
}


const styles = StyleSheet.create({
   main:{
      alignContent:"center",
      margin:30,
      // backgroundColor:"black",
      padding:20,
    },
    input :{
        padding:20,
        // height:20,
        marginBottom:20,
        borderWidth:1,
        // color:"white",
       outlineColor:"white",
       borderColor:"white",
       

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
