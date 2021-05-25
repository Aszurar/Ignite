import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button(props) {
    return(     

    <TouchableOpacity 
        style={styles.AddSkillButton} 
        activeOpacity={0.7} 
        onPress={props.onPressValue}
    >
        <Text style={styles.AddSkillButtonText}>Add</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    AddSkillButton: {
        backgroundColor: '#A370F7',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
    },

    AddSkillButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },
})