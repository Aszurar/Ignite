import React, { useMemo } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Item } from '../Item';

interface ISearchResults {
    data: {
        id: string;
        game: string;
        likes: number;
    }[]
    unfollow: () => void;
}

export function SearchResults({ data, unfollow }: ISearchResults) {
    // const totalLikes = data.reduce((acc, cur) => acc + cur.likes, 0);
    const totalLikes = useMemo(() => {
        return data.reduce((acc, cur) => acc + cur.likes, 0);
    }, [data]);
    // 1º redenrização: total: 3694ms
    //1º redenrização: total com useMemo: 1491ms
    //2º redenrização: Game 2: 316ms
    //2º redenrização: Game 2 com useMemo: 326ms

    return (
        <>
            <View style={styles.totalLikesContainer}>
                <Text style={styles.totalLikes}>Todal de Likes: {totalLikes}</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Item
                            game={item.game}
                            likes={item.likes}
                        />
                        <TouchableOpacity onPress={unfollow}>
                            <Text>Deixar de seguir</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginBottom: 16,
        // alignItems: 'center',
    },
    totalLikesContainer: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 24,
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    totalLikes: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#32fc9ee1'
    }
})