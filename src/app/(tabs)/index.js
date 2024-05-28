import { Redirect, router } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "../../providers/AuthProvider";

export default function TabIndex() {

    return <Redirect href={'/trips/'} />
}