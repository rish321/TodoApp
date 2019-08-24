import React, {Component} from 'react';
import { View } from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import TodoListView from "./views/TodoListView";

const TodoListStack = createStackNavigator(
    {
        TodoList: { screen: TodoListView },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#42f44b',
            },
            headerTintColor: '#FFFFFF',
            title: 'TodoList',
        },
    }
);

const AddTodoStack = createStackNavigator(
    {
        TodoList: { screen: TodoListView },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#42f44b',
            },
            headerTintColor: '#FFFFFF',
            title: 'AddTodo',
        },
    }
);

const TabNavigator = createMaterialBottomTabNavigator(
    {
        TodoList: { screen: TodoListStack,
            navigationOptions:{
                tabBarLabel:'TodoList',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-list'}/>
                    </View>),
            }
        },
        AddTodo: { screen: AddTodoStack,
            navigationOptions:{
                tabBarLabel:'AddTodo',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-add'}/>
                    </View>),
            }
        }
    },
    {
        initialRouteName: "TodoList",
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: { backgroundColor: '#3BAD87' },
    },
);

export default createAppContainer(TabNavigator);