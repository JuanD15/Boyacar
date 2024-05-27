import { supabase } from "./ConnectService.mjs";

export const insertPerson = async (personData) => {
    const { error } = await supabase
        .from('Person')
        .insert(personData)

    return error
}

export const insertProfile = async () => {
    const { error } = await supabase
        .from('countries')
        .insert(personData)

    console.log('Error------', error);
}