/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {
   AppRegistry,
   Text,
   View,
   Button,
 } from 'react-native';

 import { StackNavigator } from 'react-navigation';
 import  ChatScreen  from './App';
 import ShopScreen from './Shop';

 class HomeScreen extends React.Component {
   static navigationOptions = {
     title: 'Welcome',
   };
   render() {
    const { navigate } = this.props.navigation;
     return (
       <View>
         <Text>Hello, Chat App!</Text>
         <Button
           onPress={() => navigate('Chat', { user: 'Lucy' })}
           title="按钮"
         />
         <Button
          onPress = {() => navigate('Shop',{user:'jason'})}
          title = '商店'
         />
       </View>

    );
   }
 }

 const SimpleApp = StackNavigator({
   Home: { screen: HomeScreen },
   Chat: { screen: ChatScreen },
   Shop: { screen: ShopScreen },
 });


AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
