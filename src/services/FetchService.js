import { supabase } from "./ConnectService.mjs";


export const fetchUserWithID = async (id) => {
    let { data: User, error } = await supabase
        .from('Profile')
        .select()
        .eq('profile_id', id)
        .maybeSingle()

    return User;
}

export const fetchPersonWithID = async (id) => {
    let { data: Person, error } = await supabase
        .from('Person')
        .select()
        .eq('person_id', id)
        .maybeSingle()

    return Person;
}

export const fetchUserPersonWithID = async (id) => {
    const { data: User, error } = await supabase
        .from('Profile')
        .select(`
      *,
      Person (
        *
      )
    `)
        .eq('profile_id', id)
        .maybeSingle()


    return User;
}