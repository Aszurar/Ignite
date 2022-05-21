import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IItem {
    game: string;
    likes: number;
}

export function ItemComponent({ game, likes }: IItem) {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.text}>
                {game} - Likes: {likes}
            </Text>
        </TouchableOpacity>

    );
}

export const Item = memo(ItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps);
})

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: '#9a61c9',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
    }
})