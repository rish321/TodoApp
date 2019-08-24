import React, {Component} from "react";
import {Button, Image, ImageSourcePropType, Text, View} from "react-native";
import {styles} from "../Styles";
import ReminderView from "./ReminderView";
import {ReminderItem} from "../models/ReminderItem";

interface TodoItemViewProps {
    title: String;
    description: String;
    pic?: ImageSourcePropType;
    reminder?: ReminderItem;
}

function markDone() {

}

function editDetails() {

}

export default class TodoItemView extends Component<TodoItemViewProps> {
    render() {
        return (
            <View style={styles.item}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.description}>{this.props.description}</Text>
                    </View>
                    <Image source={this.props.pic} style={styles.image}/>
                </View>
                <ReminderView style={{paddingTop: 20}}/>
                <View style={[styles.row, {marginTop: 5}]}>
                    <View style={[styles.column, styles.actionButton]}>
                        <Button
                            onPress={markDone}
                            title="Done"
                            color="#841584"/>
                    </View>
                    <View style={[styles.column, styles.actionButton]}>
                        <Button
                            onPress={editDetails}
                            title="Edit"
                            color="#841584"/>
                    </View>
                </View>
            </View>
        );
    }
}