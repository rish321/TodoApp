import {ImageSourcePropType} from "react-native";
import {ReminderItem} from "./ReminderItem";

export class TodoItem {
    title: string;
    description: string;
    pic: ImageSourcePropType;
    reminder?: ReminderItem;
}