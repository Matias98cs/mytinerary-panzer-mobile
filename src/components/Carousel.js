import { View, Text, FlatList, Image, StyleSheet, Dimensions, Animated, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get("window").width;
const width_container = width * 0.7;
const space = 10;

function Carousel({ cities }) {
    let img = cities?.response.map(item => ([item.photo, item.city, item._id]))

    const navigation = useNavigation()
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
                snapToInterval={width_container}
                scrollEventThrottle={16}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * width_container, //elemento anterios
                        index * width_container, //elemento en curso
                        (index + 1) * width_container, // elemento siguiente
                    ];
                    const outputRange = [0, -50, 0];
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange
                    });
                    return (
                        <TouchableOpacity key={item._id} onPress={() => navigation.navigate('Details', { id: item[2] })}>
                            <View style={{ width: width_container }}>
                                <Animated.View
                                    style={{
                                        marginHorizontal: space,
                                        padding: space,
                                        borderRadius: 34,
                                        alignItems: "center",
                                        transform: [{ translateY }],
                                    }}>
                                    <Image source={{ uri: item[0] }} style={styles.posterImage} />
                                    <Text style={styles.carouselText}>{item[1]}</Text>
                                </Animated.View>
                            </View>
                        </TouchableOpacity>
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
        height: width_container * 1.2,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
    },
    carouselText: {
        fontSize: 25,
        color: '#DCD7C9',
        paddingTop: 8
    },
})
