import React, {Component} from "react";
import {Button, TextInput, View} from "react-native";
class AddTodoViewModel {
    public title: string;
    public description: string;

    constructor(props: AddTodoProps) {
        this.title = props.title;
        this.description = props.description;
    }
}

interface AddTodoProps {
    title: string;
    description: string;
}

export default class AddTodoView extends Component<AddTodoProps, AddTodoViewModel> {
    constructor(props: AddTodoProps) {
        super(props);
        this.state = new AddTodoViewModel(props);
    }

    render() {
        return (
            <View style={{padding: 20}}>
                <TextInput
                    style={{height: 40}}
                    onChangeText={(text) => this.setState({title: text})}
                    value={this.state.title}
                    placeholder={"Enter title"}
                />
                <TextInput
                    style={{height: 40}}
                    onChangeText={(text) => this.setState({description: text})}
                    value={this.state.description}
                    placeholder={"Enter description"}
                />

                <Button title="Save" onPress={this.saveTodo}/>
            </View>
        );
    }

    private saveTodo() {

    }
}