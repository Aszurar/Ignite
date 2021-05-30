import React from 'react';
import { 
    TouchableOpacity, 
    Text, 
    StyleSheet, 
    TouchableOpacityProps
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}


export function Button({title, ...rest } : ButtonProps) {
    return(     

    <TouchableOpacity 
        style={styles.AddSkillButton}
        activeOpacity={0.7}
        {...rest}
        >
        <Text style={styles.AddSkillButtonText}>{title}</Text>
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