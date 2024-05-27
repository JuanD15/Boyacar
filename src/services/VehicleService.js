import { supabase } from "./ConnectService.mjs";

export const insertVehicle = async (vehicleData) => {
    const { data, error } = await supabase
        .from('Vehicle')
        .insert([vehicleData])

    return { data, error }
}

export const fetchVehicleWithProfileID = async (id) => {
    const { data, error } = await supabase
        .from('Vehicle')
        .select()
        .eq('profile_id', id)
        .maybeSingle()

    return { data, error }
}