import React, { useEffect, useState } from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { api } from '../api/api';
import { SearchResults } from '../components/SearchResults';

interface IGames {
    id: string;
    game: string;
    likes: number;
}

export function Home() {
    const [game, setGame] = useState('');
    const [gameList, setGameList] = useState<IGames[]>([])

    async function handleSearchGameList() {
        try {
            const response = await api.get(`/games?q=${game}`);
            setGameList(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <TouchableWithoutFeedback style={styles.wrapper} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Vetor</Text>

                <View style={styles.main}>
                    <Text style={styles.subtitle}>Jogos</Text>
                    <TextInput style={styles.input}
                        placeholder="Jogo"
                        placeholderTextColor="#32fc9e88"
                        autoCapitalize='words'
                        onChangeText={setGame}
                    />
                    <Button title="Buscar" onPress={handleSearchGameList} />
                </View>

                <SearchResults data={gameList} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
    },
    container: {
        height: "100%",
        width: "100%",
        padding: 25,
        backgroundColor: '#9a61c9',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        marginTop: 100,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 10,
        color: '#32fc9e',
    },
    main: {
        marginTop: 100,
    },
    input: {
        borderWidth: 1,
        borderColor: '#32fc9e',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: '#fff',
    },

});
