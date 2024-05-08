import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'



const pokemonName = ({ item, pokemonsList, setPokemonsList }) => {

    const handlePress = (item) => {
        const newList = pokemonsList.map((p) => {
            if (p.index === item.index) {
                return { ...p, pressed: !p.pressed }
            }

            return p
        })
        setPokemonsList(newList)
    }

    return (
        <View style={item.pressed ? styles.pressedContainer : styles.containerItem}>
            <Pressable onPress={() => handlePress(item)}>
                <Text style={item.pressed ? styles.pressedItem : styles.pokeItem}>{item.index + 1} - {item.name}</Text>
            </Pressable>
        </View>
    )
}

const Pokemons = () => {

    const [pokemonsList, setPokemonsList] = useState([{"name": "Buscando..."}])

    const getPokemonsApi = async () => {
        const pokemonsApi = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
        const data = await pokemonsApi.json()

        formatedData = data.results.map((p, i) => {
            return { index: i, name: p.name, pressed: false }
        })

        setPokemonsList(formatedData)
    }

    useEffect(() => {
        getPokemonsApi()
    }, [])

  return (
        <View style={styles.containerList}>
            <Text>Pokemons</Text>
            <FlatList
                style={styles.pokeList}
                data={pokemonsList}
                renderItem={({ item }) => pokemonName({ item, pokemonsList, setPokemonsList })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerList: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerItem: {
        backgroundColor: '#f2f2f2',
        margin: 3,
        padding: 10,
        borderRadius: 10
    },
    pokeItem: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 2
    },
    pressedContainer: {
        backgroundColor: '#333',
        margin: 3,
        padding: 10,
        borderRadius: 10
    },
    pressedItem: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 2
    }
})

export default Pokemons
