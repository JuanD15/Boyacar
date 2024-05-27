import { Redirect } from "expo-router";
import Feed from "./trips";

export default function TabIndex() {
    return <Redirect href={'/trips/'} />
}