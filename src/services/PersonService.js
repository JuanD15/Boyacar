import { supabase } from "./ConnectService.mjs";

export const insertPerson = async (personData) => {
    const { data, error } = await supabase
        .from('Person')
        .insert([personData])

    return { data, error }
}

export const fetchPersonWithID = async (id) => {
    const { data, error } = await supabase
        .from('Person')
        .select()
        .eq('person_id', id)
        .maybeSingle()

    return { data, error }
}