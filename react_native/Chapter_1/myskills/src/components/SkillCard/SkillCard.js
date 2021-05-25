import React from 'react';
import { TouchableOpacity, Text, StyleSheet,FlatList } from 'react-native';

export function SkillCard({ mySkillsValues }) {
    return( 
        <FlatList
            data={mySkillsValues}
            keyExtractor={item => item}
            renderItem={({ item }) => (           
                <TouchableOpacity style={styles.skillCard}>
                    <Text style={styles.skillTitle}>
                        {item}
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