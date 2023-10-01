import supabase from "./Superbase";

export async function getParticipants() {
  let { data: participants, error } = await supabase
    .from("participants")
    .select("*");

  console.log(participants, error);
  if (error) {
    console.error(error);
    throw new Error("Participants could not be loaded");
  }

  return participants;
}
