import React, {Component} from "react";
import {FlatList, View} from "react-native";
import {styles} from "../Styles";
import TodoItemView from "./TodoItemView";
import {TodoItem} from "../models/TodoItem";

interface TodoFlatListViewProps {
    flData: TodoItem[]
}

export default class TodoFlatViewList extends Component <TodoFlatListViewProps> {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data = {this.props.flData}
                    renderItem={({item}: { item: TodoItem }) => <TodoItemView title={item.title} pic={item.pic}
                                                          description={item.description}/>}
                />
            </View>
        );
    }
}