import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import {styles} from "../Styles";

interface ReminderProps {
    time?: bigint;
    isSet?: boolean;
}

class ReminderViewModel {
    public time?: bigint;
    public isSet?: boolean;

    constructor(props: ReminderProps) {
        this.time = props.time;
        this.isSet = props.isSet;
    }
}

export default class ReminderView extends Component<ReminderProps> {
    constructor(props: ReminderProps) {
        super(props);
        this.state = new ReminderViewModel(props);
    }

    componentWillReceiveProps(nextProps: Readonly<ReminderProps>, nextContext: any): void {
        if (nextProps != this.props) {
            this.state = new ReminderViewModel(nextProps);
        }
    }

    private setTimer() {
        this.setState({isSet: false});
    }

    private cancelTimer() {
        this.setState({
            isSet: true
        });
    }

    render() {
        return this.state.isSet ?
            <View>
                <Text>Reminder Set at: {this.state.time}</Text>
                <Button
                    onPress={this.cancelTimer}
                    title="Cancel Timer"
                    color="#f41584"/>
            </View> :
            <View>
                <Button
                    onPress={this.setTimer}
                    title="Set Timer"
                    color="#000000"/>
            </View>;
    }
}