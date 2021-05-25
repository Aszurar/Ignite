import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';
import { Button } from '../components/Button/Button';
import { SkillCard } from '../components/SkillCard/SkillCard';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleNewSkill(data) {
        setNewSkill(data)
    }

    function handleAddNewSkill(){
        setMySkills( oldState => [...oldState, newSkill] )
        console.log('alo');

        // setMySkills([...mySkills, newSkill])
        // As 2 formas realização a mesma atualização.
    }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Lucas de Lima</Text>
      
      <TextInput style={styles.textInput} 
                placeholder="New Skill" 
                placeholderTextColor="#555"
                onChangeText={ data => handleNewSkill(data)}
                />
      <Button onPressValue={handleAddNewSkill}/>

      <Text style={[styles.title, { marginVertical: 50 }]}>
            My Skills
      </Text>

      <SkillCard mySkillsValues={mySkills} />
    </View>

  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30,
    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },

    textInput: {
        fontSize: 18,
        backgroundColor: '#1f1e25',
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7,
        marginTop: 30,
        color: '#fff',
    },
})