import React from 'react'
import { SafeAreaView, FlatList, TouchableOpacity, Touchable } from "react-native"
import Post from '../component/Post'
import Image1 from '../../assets/beautiful.jpeg'
import Image2 from '../../assets/Sunflower.jpeg'
import Image3 from '../../assets/dahlia.jpeg'
import Image4 from '../../assets/images.jpeg'



export default function BlogPost({ navigation }) {
    const blog = [
        { imgUrl: Image1, writer: 'Mason Mounts', time: '2', header: "Two Arkansas firemen, Vince and Don, get hold of a map" },
        { imgUrl: Image2, writer: 'Encil Street', time: '5', header: 'They caught me sliding on the E-Way with the heat' },
        { imgUrl: Image3, writer: 'Ama Pinamang', time: '8', header: 'Purple Iphone this Summer?' },
        { imgUrl: Image4, writer: 'Desmond elliot', time: '23', header: 'Remember the Name "EMINEM"' }
    ];




    return (
        <SafeAreaView>

            <FlatList
                data={blog}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => { navigation.navigate('Movie Review', { newAuthor: item.writer, newTime: item.time, newTitle: item.header, newPhoto: item.imgUrl }) }}><Post
                        author={item.writer}
                        duration={item.time}
                        photo={item.imgUrl}
                        title={item.header}
                    /></TouchableOpacity>
                }}
                keyExtractor={(item) => item.time}
            />
        </SafeAreaView>
    )
}

