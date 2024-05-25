import { supabase } from "./ConnectService.mjs"

export const signUpWithEmailAndPassword = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email, password
    })
    return { data, error }
}