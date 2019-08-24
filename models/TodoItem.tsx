import {ImageItem} from "./ImageItem";
import {ReminderItem} from "./ReminderItem";

export class TodoItem {
    title: String;
    description: String;
    pic: ImageItem;
    reminder?: ReminderItem;
}