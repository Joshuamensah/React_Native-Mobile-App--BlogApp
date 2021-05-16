import React from 'react'
import { SafeAreaView, FlatList, TouchableOpacity, Touchable } from "react-native"
import Post from '../component/Post'
import Image1 from '../../assets/beautiful.jpeg'
import Image2 from '../../assets/Sunflower.jpeg'
import Image3 from '../../assets/dahlia.jpeg'
import Image4 from '../../assets/images.jpeg'



export default function BlogPost({ navigation }) {
    const blog = [
        { imgUrl: Image1, writer: 'Mason Mounts', time: '2', header: "Does Dry is January Actually Improve Your Health?" },
        { imgUrl: Image2, writer: 'Encil Street', time: '5', header: 'How to Seem like You Always Have Your Shot Together' },
        { imgUrl: Image3, writer: 'Ama Pinamang', time: '8', header: 'How to make your Days Awesome.' },
        { imgUrl: Image4, writer: 'Desmond elliot', time: '4', header: 'Focus On Learning and Creating Rather Than Entertainment and Distraction' }
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

