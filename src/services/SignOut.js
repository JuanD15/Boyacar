import { supabase } from "./ConnectService.mjs";

export const signOut = async () => {
    await supabase.auth.signOut()
}