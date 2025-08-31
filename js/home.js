import { supabase } from "./supabase.js";

const container = document.getElementById("issues");

async function loadIssues() {
  const { data } = await supabase.from("issues").select("*").order("created_at", { ascending: false });
  if(data.length < 1) return container.innerHTML = "No bugs/feature requests"
  container.innerHTML = data.map(issue => `
    <div class="issue">
      <a href="issue.html?slug=${issue.slug}">
        <h2>${issue.title}</h2>
      </a>
      <p>Type: ${issue.type} • Status: ${issue.status || "Not selected"}</p>
    </div>
  `).join("");
}

loadIssues();
