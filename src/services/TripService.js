import { supabase } from "./ConnectService.mjs";

export const insertTrip = async (tripData) => {
    const { error } = await supabase
        .from('Trip')
        .insert([tripData])

    return { error }
}

export const fetchTrips = async () => {
    const { data, error } = await supabase
        .from('Trip')
        .select()

    return { data, error }
}
