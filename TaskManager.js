import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, FlatList, Item} from 'react-native';

export default function TaskManager() { 
  const [tasks, setTasks] = useState([]);
  
  function addTask() {
    const newTask = {
      id: Date.now(),
      title: 'New Task',
      completed: false
    }
    setTasks(tasks => [...tasks, newTask])
    console.log(tasks)
  }

  function toggleTaskCompletion(taskId) {
    const updatedTasks = tasks.map(task => task.id === taskId ? 
    {...task, completed: !task.completed} : task)
    setTasks(updatedTasks)
  }

  const renderItem = ({ item }) => (
    <View>
     
   
        <Text>{item.title} - {item.completed ? 'Completed' : 'Pending'}</Text>
        <Button
          onPress={() => toggleTaskCompletion(item.id)}
          title={item.completed ? 'Undo' : 'Complete'}
        />
    
      
    </View>
  )

  return (
    <View>
      <Text>Task Manager</Text>
      <Button 
        onPress={addTask}
        title='Add task'
      />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
