import { supabase } from "./ConnectService.mjs";

export const showTrips = async () => {
  let { data: trips, error } = await supabase
    .from("Trip")
    .select("*, Profile(*,Person(*))");

  return trips;
};
