import React, { useState } from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import BlogPostList from './src/screens/BlogPostList';
import BlogPostDetail from './src/screens/BlogPostDetail';
//contexts
import DataContext from './src/contexts/DataContext';

const AppStack = createStackNavigator();

export default function App() {

  const [blogPostData, setBlogPostData] = useState([]);

  return (
    <DataContext.Provider value={{ blogPostData, setBlogPostData }}>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name="BlogPostList" component={BlogPostList} options={{ headerShown: false }} />
          <AppStack.Screen name="BlogPostDetail" component={BlogPostDetail} options={{ headerShown: false }} />
        </AppStack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
}
