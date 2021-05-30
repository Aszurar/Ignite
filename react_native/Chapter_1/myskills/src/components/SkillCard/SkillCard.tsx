import React from 'react';
import { TouchableOpacity, Text, StyleSheet, FlatList, TouchableOpacityProps } from 'react-native';

interface MySkillsPropsValues {
    id: string,
    name: string;
}

interface MySkillsProps extends TouchableOpacityProps {
        mySkillsValues: MySkillsPropsValues[];
        // outra forma de tipar: Array<MySkillsPropsValues>;
        RemoveSkill: (id: string) => void;
}

export function SkillCard({ mySkillsValues, RemoveSkill, ...rest }: MySkillsProps){
    return( 
        <FlatList
            data={mySkillsValues}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (           
                <TouchableOpacity 
                    style={styles.skillCard}
                    onPress={() =>RemoveSkill(item.id)}
                    {...rest}
                    >
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