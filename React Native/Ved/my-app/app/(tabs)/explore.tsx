import { FlatList, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function TabTwoScreen() {

  const Users = [
    {id:1,name:"Ravi Kumar",Designation:"Trainer"},
    {id:2,name:"ved",Designation:"Student"},
    {id:3,name:"Parkash",Designation:"Student"},
    {id:4,name:"Ravi",Designation:"Student"},
  ]  

  return (
   <SafeAreaView style={styles.main}>
    <FlatList 
      data={Users}
      renderItem={({item})=>(
        <View style={styles.mainbox}>
          <Text style={styles.color}>{item.Designation}</Text>
          <Text style={styles.color}>{item.name}</Text>
        </View>
      )}
      extraData={""}
      // numColumns={2}
    />
    {/* <ScrollView horizontal >
        <View style={styles.box}></View>
        <View style={styles.boxgreen}></View>
        <View style={styles.box}></View>
        <View style={styles.boxgreen}></View>
        <View style={styles.box}></View>
        <View style={styles.boxgreen}></View>
        <View style={styles.box}></View>
        <View style={styles.boxgreen}></View>
        <View style={styles.box}></View>
        <View style={styles.boxgreen}></View>
    </ScrollView> */}
   </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    text :{
        color:"red",
    },
    box:{
      width:100,
      height:100,
      borderWidth:1,
      backgroundColor:"red",
      borderRadius:50
    },
    boxgreen:{
      width:100,
      height:100,
      borderWidth:1,
      backgroundColor:"green",
      borderRadius:50,
      gap:10,
    },
    color:{
      color:"white",
      textAlign:"center"
     
    },
    main:{
      flex:1
    },
    mainbox:{
      borderWidth:1,
      width:100,
      height:100,
      backgroundColor:"blue",
      paddingTop:20
    }

})
