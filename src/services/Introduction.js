import supabase from "./Superbase";

export async function getIntroduction() {
  let { data: introduction, error } = await supabase.from("intro").select("*");

  if (error) {
    console.error(error);
    throw new Error("Introduction could not be loaded");
  }

  return introduction;
}

export async function updateIntroduction(id, title, description) {
  const { data, error } = await supabase
    .from("intro")
    .update({ title, description })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Introduction could not be updated");
  }

  return data;
}
