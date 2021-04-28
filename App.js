import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BlogPost from './src/screen/BlogPost';
import DetailedPost from './src/screen/DetailedPost';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          options={{
            title: 'Discover',
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold'
            },
            headerLeft: () => (
              <Foundation name="thumbnails" size={30} color="black" style={{ marginLeft: 10 }} />
            ),
            headerRight: () => (
              <Feather name="search" size={30} color="black" style={{ marginRight: 10 }} />
            ),
            headerStyle: {
              height: 125
            }
          }}
          name='Home'
          component={BlogPost} />
        <Stack.Screen
          options={{
            title: '',
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <Feather name="headphones" size={30} color="black" style={{ marginRight: 15 }} />
                <Feather name="heart" size={30} color="black" style={{ marginRight: 15 }} />
                <AntDesign name="sharealt" size={30} color="black" style={{ marginRight: 5 }} />
              </View>
            ),
            headerStyle: {
              height: 125
            }
          }}
          name='Movie Review' component={DetailedPost} />

      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


