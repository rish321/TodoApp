import {ReminderItem} from "./ReminderItem";
import {ImageSourcePropType} from "react-native";

export class TodoItem {
    title: String;
    description: String;
    pic: ImageSourcePropType;
    reminder?: ReminderItem;
}