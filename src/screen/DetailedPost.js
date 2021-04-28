import React from 'react'
import { View, SafeAreaView, StyleSheet, Image, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import Picture from '../../assets/flower2.jpeg'
import { ScrollView } from 'react-native-gesture-handler';



export default function DetailedPost({route}) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
           
            <View style={styles.ImgContainer}>
                <Image
                    style={styles.PostImg}
                    source={route.params.newPhoto}
                    />
            </View>

            <View style={styles.Headertainer}>
                <Text style={styles.Title}>{route.params.newTitle}</Text>

                <View style={styles.headtime}>
                    <View style={styles.Writers}>
                        <Image
                            style={styles.Proimage}
                            source={route.params.newPhoto} />
                        <Text style={styles.WritersName}>{route.params.newAuthor}</Text>
                    </View>
                    <View style={styles.WritersTime}>
                        <Entypo name="dot-single" size={24} color="#bfc1c2" />
                        <Text style={styles.WritersMin}>{route.params.newTime} min read</Text>
                    </View>
                </View>

                <View style={styles.PostContainer}>
                    <Text style={styles.PostText}>
                    Two Arkansas firemen, Vince and Don, get hold of a map that leads to a cache of stolen gold in an abandoned factory in East St. Louis. What they don't know is that the factory is in the turf of a local gang, who come by to execute one of their enemies. Vince sees the shooting, the gang spots Vince, and extended mayhem ensues. As Vince and Don try to escape, gang leader King James argues with his subordinate Savon about how to get rid of the trespassers.
                    Two Arkansas firemen, Vince and Don, get hold of a map that leads to a cache of stolen gold in an abandoned factory in East St. Louis. What they don't know is that the factory is in the turf of a local gang, who come by to execute one of their enemies. 
                    </Text>
                </View>
            </View>


           
            <StatusBar style="auto" />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 30
    },
    ImgContainer: {
        marginBottom: 20
    },
    PostImg: {
        height: 300,
        width: '100%',
        alignItems: 'center'
    },
    headtime: {
        flexDirection: 'row',
        marginTop: 10
    },
    Title: {
        fontSize: 23,
        fontFamily: 'Palatino-Bold'
    },
    Proimage: {
        height: 25,
        width: 25,
        borderRadius: 15,
        marginRight: '3%'
    },
    Writers: {
        flexDirection: 'row',
        marginRight: '5%'
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
    },
    PostContainer: {
        marginTop: 25
    },
    PostText: {
        fontSize: 17
    }
});