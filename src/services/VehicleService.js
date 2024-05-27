import { supabase } from "./ConnectService.mjs";

export const insertVehicle = async (vehicleData) => {
    const { error } = await supabase
        .from('Vehicle')
        .insert([vehicleData])

    return { error }
}

export const fetchVehicleWithProfileID = async (id) => {
    const { data, error } = await supabase
        .from('Vehicle')
        .select()
        .eq('profile_id', id)
        .maybeSingle()

    return { data, error }
}

export const insertManufacturer = async (manufacturer) => {
    const { error } = await supabase
        .from('Manufacturer')
        .insert([manufacturer])

    return { error }
}

export const fetchManufacturer = async () => {
    const { data, error } = await supabase
        .from('Manufacturer')
        .select()

    return { data, error }
}