import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import TodoListView from "./views/TodoListView";
import AddTodoView from "./views/AddTodoView";

const TodoListStack = createStackNavigator(
    {
        TodoList: {screen: TodoListView},
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
        TodoList: {screen: AddTodoView},
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
        TodoList: {
            screen: TodoListStack,
            navigationOptions: {
                tabBarLabel: 'TodoList',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-list'}/>
                    </View>),
            }
        },
        AddTodo: {
            screen: AddTodoStack,
            navigationOptions: {
                tabBarLabel: 'AddTodo',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-add'}/>
                    </View>),
            }
        }
    },
    {
        initialRouteName: "TodoList",
        activeColor: '#0000f6',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#fAfAfA'},
    },
);

export default createAppContainer(TabNavigator);