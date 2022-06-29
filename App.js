import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import Task from './components/Task';
export default function App() {
  const [task, setTask] = useState();
const [taskItems,setTaskItems] = useState([]);
  const handleAddText = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask();
  }

  const completeTask =(index) =>{
    let itemsCopy =[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((item,index)=>{
             return(
              <TouchableOpacity key={index} onPress={()=> completeTask()}>
                <Task text={item}/>
              </TouchableOpacity>
             ) 
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput value={task} onChangeText ={text =>setTask(text)}style={styles.input} placeholder={'Write a task'} />
        <TouchableOpacity onPress={()=> handleAddText()}> 
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input: {
    paddingVertical:15,
    width:250,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addWrapper: {
    width:60,
    height:60,
    backgroundColor:'#fff',
    justifyContent:'center',
    borderRadius:60,
    alignItems:'center',
  },
  addText: {},
});
