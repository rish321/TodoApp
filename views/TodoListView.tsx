import React, {Component} from "react";
import {View} from "react-native";
import TodoFlatViewList from "./TodoFlatViewList";
import {ImageItem} from "../models/ImageItem";
import {TodoItem} from "../models/TodoItem";

export default class TodoListView extends Component {
    render() {
        let pic : ImageItem = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        let data : TodoItem[] = [
            {title: 'Title1', description: 'Description1', pic: pic},
            {title: 'Title2', description: 'Description2', pic: pic},
            {title: 'Title3', description: 'Description3', pic: pic},
        ];
        return (
            <View>
                <TodoFlatViewList flData={data}/>
            </View>
        );
    }
}