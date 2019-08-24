import React, {Component} from "react";
import {Button, ImageSourcePropType, TextInput, View} from "react-native";
import TodoFlatViewList from "./TodoFlatViewList";
import {ImageItem} from "../models/ImageItem";
import {TodoItem} from "../models/TodoItem";
import {styles} from "../Styles";

class AddTodoViewModel {
    public title: String;
    public description: String;

    constructor(props: AddTodoProps) {
        this.title = props.title;
        this.description = props.description;
    }
}

interface AddTodoProps {
    title: String;
    description: String;
}

export default class AddTodoView extends Component<AddTodoProps> {
    constructor(props: AddTodoProps) {
        super(props);
        this.state = new AddTodoViewModel(props);
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40}}
                    onChangeText={(text) => this.setState({title: text})}
                    value={this.state.title}
                />
                <TextInput
                    style={{height: 40}}
                    onChangeText={(text) => this.setState({description: text})}
                    value={this.state.description}
                />

                <Button title="Save" onPress={this.saveTodo}/>
            </View>
        );
    }

    private saveTodo() {

    }
}