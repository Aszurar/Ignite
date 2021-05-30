import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';
import { Button } from '../components/Button/Button';
import { SkillCard } from '../components/SkillCard/SkillCard';

interface MySkillsProps {
    id: string;
    name: string;
    date?: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<MySkillsProps[]>([]);
    const [gretting, setGretting] = useState('');

    function handleNewSkill(data: string) {
        setNewSkill(data)
    }

    function handleAddNewSkill(){
        const data: MySkillsProps = {
            id: String(new Date().getTime()),
            name: newSkill,
        }

        setMySkills( oldState => [...oldState, data] )
        // setMySkills([...mySkills, newSkill])
        // As 2 formas realização a mesma atualização.
    }

    function handleRemoveSkill(id: string) {
        let mySkillsUpdate = mySkills.filter(skill => id !== skill.id);
        setMySkills(mySkillsUpdate);
    }

    useEffect(() => {
        let currentHour = new Date().getHours(); // resgatando a hora atualização

        if (currentHour < 12) {
            setGretting('Good Morning 🛣')
        } else if (currentHour >= 12 && currentHour < 18) {
            setGretting('Good Afternoon ☀')
        } else {
            setGretting('Good Night 🌙')
        }
    }, [])
return(
    
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Lucas de Lima</Text>
        <Text style={styles.grettingText}>{ gretting }</Text>

      <TextInput style={styles.textInput} 
                placeholder="New Skill" 
                placeholderTextColor="#555"
                onChangeText={ data => handleNewSkill(data)}
                />
      <Button onPress={handleAddNewSkill}
              title="Add"
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
            My Skills
      </Text>

      <SkillCard 
        mySkillsValues={mySkills} 
        RemoveSkill={(id) => handleRemoveSkill(id)}
        />
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
    grettingText : {
        color: '#fff',

    }
})