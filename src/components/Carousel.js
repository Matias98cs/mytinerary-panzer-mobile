import { View, Text, FlatList, Image, StyleSheet, Dimensions, Animated, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ancho_contenedor = width * 0.7;
const espacio = 10;


function Carousel({ cities }) {
    let img = cities?.response.map(item => (item.photo))
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <SafeAreaView style={StyleSheet.container}>
            <StatusBar />
            <Animated.FlatList
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: { x: scrollX }
                        }
                    }], { useNativeDriver: true }
                )}
                data={img}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 100, paddingHorizontal: 50 }}
                decelerationRate={0}
                snapToInterval={ancho_contenedor}
                scrollEventThrottle={16}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * ancho_contenedor, //elemento anterios
                        index * ancho_contenedor, //elemento en curso
                        (index + 1) * ancho_contenedor, // elemento siguiente
                    ];
                    const outputRange = [0, -50, 0];
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange
                    });
                    return (
                        <View style={{ width: ancho_contenedor }}>
                            <Animated.View
                                style={{
                                    marginHorizontal: espacio,
                                    padding: espacio,
                                    borderRadius: 34,
                                    alignItems: "center",
                                    transform: [{ translateY }],
                                }}
                            >
                                <Image source={{ uri: item }} style={styles.posterImage} />
                            </Animated.View>
                        </View>
                    );
                }}
            />
        </SafeAreaView >
    );
}

export default Carousel


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    posterImage: {
        width: "100%",
        height: ancho_contenedor * 1.2,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
    },
})
