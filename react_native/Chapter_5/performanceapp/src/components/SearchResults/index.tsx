import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Item } from '../Item';

interface ISearchResults {
    data: {
        id: string;
        game: string;
        likes: number;
    }[]
}

export function SearchResults({ data }: ISearchResults) {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}  >
            {
                data.map(item => (
                    <Item
                        key={item.id}
                        game={item.game}
                        likes={item.likes}
                    />
                ))
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginBottom: 16,
        // alignItems: 'center',
    },
})