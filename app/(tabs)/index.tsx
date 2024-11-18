import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity 
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.container}>
        <Image
            source={{
              uri: "https://student-activity.binus.ac.id/himka/wp-content/uploads/sites/17/2021/07/putef-2.png",
              width: 150,
              height: 100,
            }}
          />
          <Text>Shoope</Text>
         
          <TextInput style={styles.inputtext1} placeholder="No HandPhone/Email" />
          
          <TextInput style={styles.inputtext2} placeholder="Password" />
          <TouchableOpacity style={styles.button1}onPress={()=>alert('Password')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}onPress={()=>alert('')}>
            <Text style={styles.text4}>Lupa Kata Sandi
              
            </Text>
          </TouchableOpacity>
          
          
          
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop:20,
},
button1:{
  backgroundColor: "Orange",
  borderRadius:5,
  borderWidth:1,
  fontSize:20,
  width:300,
  height:30,
  margin:10,
  alignItems:"center"
},
button2:{

 right:93,
},
text4:{
  color:"blue",
  left:150,
 },
 text1:{
   fontFamily:"Arial",
   fontSize:50,
   color:"black",
 },

 inputtext1:{
  color:'black',
  borderRadius:5,
  borderWidth:1,
  fontSize:10,
  height:35,
  width:300,

 },
 inputtext2:{
   color: "black",
   borderRadius:5,
   borderWidth:1,
   fontSize:10,
   width:300,
   height:35,
   marginTop:10,
  },


})