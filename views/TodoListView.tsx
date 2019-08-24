import React, {Component} from "react";
import {ImageSourcePropType, View} from "react-native";
import TodoFlatViewList from "./TodoFlatViewList";
import {ImageItem} from "../models/ImageItem";
import {TodoItem} from "../models/TodoItem";

export default class TodoListView extends Component {
    render() {
        let pic : ImageSourcePropType = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        let data : TodoItem[] = [
            {title: 'Title1', description: 'Description1', pic: pic},
            {title: 'Title2', description: 'Description2', pic: pic},
            {title: 'Title3', description: 'Description3', pic: pic},
            {title: 'Title4', description: 'Description4', pic: pic},
            {title: 'Title5', description: 'Description5', pic: pic},
            {title: 'Title6', description: 'Description6', pic: pic},
        ];
        return (
            <View>
                <TodoFlatViewList flData={data}/>
            </View>
        );
    }
}