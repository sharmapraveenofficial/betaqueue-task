import supabase from "./Superbase";

export async function getQuestions() {
  let { data: introduction, error } = await supabase
    .from("questions")
    .select("*")
    .order("order");

  if (error) {
    console.error(error);
    throw new Error("Questions could not be loaded");
  }

  return introduction;
}

export async function updateQuestion(id, title, description) {
  const { data, error } = await supabase
    .from("questions")
    .update({ title, description })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Questions could not be updated");
  }

  return data;
}

export async function removeQuestion(id) {
  const { error } = await supabase.from("questions").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Questions could not be deleted");
  }

  return;
}

export async function updateQuestionOrder(reorderedQuestions) {
  const updates = reorderedQuestions.map((question, index) => {
    return {
      id: question.id,
      order: index,
      title: question.title,
      description: question.description,
    };
  });

  const { data, error } = await supabase
    .from("questions")
    .upsert(updates, { onConflict: ["id"] });

  if (error) {
    console.error("Error updating question order in Supabase:", error);
    throw new Error("Question order could not be updated in Supabase");
  }

  return data;
}
