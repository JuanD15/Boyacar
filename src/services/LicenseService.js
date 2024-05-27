import { supabase } from "./ConnectService.mjs";

export const insertDrivingLicense = async (licenseData) => {
    const { data, error } = await supabase
        .from('Driving License')
        .insert([licenseData])

    return { data, error }
}

export const fetchLicenseWithProfileID = async (id) => {
    const { data, error } = await supabase
        .from('Driving License')
        .select()
        .eq('profile_id', id)
        .maybeSingle()

    return { data, error }
}