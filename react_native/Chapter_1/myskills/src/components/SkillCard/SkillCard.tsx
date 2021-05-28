import React from 'react';
import { TouchableOpacity, Text, StyleSheet,FlatList } from 'react-native';

interface MySkillsPropsValues {
    id: string,
    name: string;
}

interface MySkillsProps {
        mySkillsValues: MySkillsPropsValues[];
        // outra forma de tipar: Array<MySkillsPropsValues>;
}

export function SkillCard({ mySkillsValues }: MySkillsProps){
    return( 
        <FlatList
            data={mySkillsValues}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (           
                <TouchableOpacity style={styles.skillCard}>
                    <Text style={styles.skillTitle}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}
        >
         
        </FlatList>
    )
}

const styles = StyleSheet.create({
    skillCard: {
        alignItems: 'center',
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        marginBottom: 16,
    },

    skillTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    }
})