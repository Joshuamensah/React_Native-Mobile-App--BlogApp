import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';








export default function Post({ author, duration, photo, title }) {
    

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.background}>
                <Image
                    style={styles.image}
                    source={photo} />

                <View style={styles.PostDetail}>
                    
                    <Text style={styles.header}>
                        {title}
                    </Text>
                    

                    <View style={styles.PostItem}>
                        <View style={styles.Writers}>
                            <Image
                                style={styles.Proimage}
                                source={photo} />
                            <Text style={styles.WritersName}>{author}</Text>
                        </View>
                        <View style={styles.WritersTime}>
                            <Entypo name="dot-single" size={24} color="#bfc1c2" />
                            <Text style={styles.WritersMin}>{duration} min read</Text>
                        </View>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    background: {
        backgroundColor: '#ffffff',
        height: 180,
        flexDirection: 'row'
    },
    image: {
        height: 150,
        width: 120,
        alignSelf: 'center',
        marginLeft: 15
    },
    PostDetail: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        flex: 1,
        textAlign: 'justify'
    },
    header: {
        fontSize: 23,
        fontFamily: 'Palatino-Bold',
        textAlign: 'left',
        flex: 0.7
    },
    PostItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    Writers: {
        flexDirection: 'row',
        marginRight: '5%'
    },
    Proimage: {
        height: 25,
        width: 25,
        borderRadius: 15,
        marginRight: '3%'
    },
    WritersMin: {
        alignSelf: 'center',
        color: '#bfc1c2'
    },
    WritersName: {
        alignSelf: 'center'
    },
    WritersTime: {
        flexDirection: 'row'
    }
});