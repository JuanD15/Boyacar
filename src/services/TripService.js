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
        .select(`
        trip_id,
        city_origin,
        city_destiny,
        date_time_departure,
        cost, 
        Profile(
            Person(
                person_name, 
                person_last_name,
                birth_date
            )
        ),
        Rating(
            rating_value
        )
        
    `)
    return { data, error }
}

export const fetchTripWithID = async (tripId) => {
    const { data, error } = await supabase
        .from('Trip')
        .select(`
            trip_id,
            city_origin,
            city_destiny,
            date_time_departure,
            cost, 
            address,
            vehicle_id,
            available_seats,
            Profile (
                person_id,
                Person:person_id (
                    person_name, 
                    person_last_name,
                    birth_date
                )
            ),
            Vehicle (
                Manufacturer (*)
            ),
            Rating (
                rating_value
              )
        `)
        .eq('trip_id', tripId)
        .maybeSingle();

    // Debugging output
    console.log('Data:', data);
    console.log('Error:', error);

    if (error) {
        console.error("Error fetching trip details:", error);
        return null;
    }

    return data;
}
