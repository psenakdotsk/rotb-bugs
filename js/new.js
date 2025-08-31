import { supabase } from "./supabase.js";

const form = document.getElementById("issueForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title");
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  const { error } = await supabase.from("issues").insert({
    title,
    type: formData.get("type"),
    slug
  });

  if (!error) {
    window.location.href = `/issue.html?slug=${slug}`;
  }
});