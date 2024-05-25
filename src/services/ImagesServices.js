import { supabase } from "./ConnectService.mjs";

export const getURL = async () => {

    const { data } = supabase
        .storage
        .from('Profile_Images')
        .getPublicUrl('messi.jpg')

    return data.publicUrl
}

export const uploadProfileImage = async (file) => {
    const { data, error } = await supabase
        .storage
        .from('Profile_Images')
        .upload('profile.png', file, {
            cacheControl: '3600',
            upsert: false
        })
}

export const uploadTemporaryImage = async (file) => {

    const { data, error } = await supabase
        .storage
        .from('temporary')
        .upload('tempPhoto.png', file, {
            cacheControl: '3600',
            upsert: false
        })

    return { data, error }
}

export const updatePicture = async (newPhoto) => {

    const { data, error } = await supabase
        .storage
        .from('temporary')
        .update('tempPhoto.png', newPhoto, {
            cacheControl: '3600',
            upsert: false
        })

    return { data, error }
}