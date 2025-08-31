import { supabase } from "./supabase.js";

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const container = document.getElementById("issue");

async function loadIssue() {
  const { data } = await supabase.from("issues").select("*").eq("slug", slug).single();
  if (!data) return container.innerHTML = "Not found";

  container.innerHTML = `
    <h1>${data.title}</h1>
    <small>Type: ${data.type} • Status: ${data.status || "Not selected"}</small>
    <div id="giscus-container"></div>
  `;

  // create giscus script
  const giscusS = document.createElement("script");
  giscusS.src = "https://giscus.app/client.js";
  giscusS.setAttribute("data-repo", "psenakdotsk/rotb-bugs");
  giscusS.setAttribute("data-repo-id", "R_kgDOPnRxwg");
  giscusS.setAttribute("data-category", "bugs");
  giscusS.setAttribute("data-category-id", "DIC_kwDOPnRxws4Cuy9x");
  giscusS.setAttribute("data-mapping", "specific");
  giscusS.setAttribute("data-term", slug); // the page slug
  giscusS.setAttribute("data-strict", "1");
  giscusS.setAttribute("data-reactions-enabled", "1");
  giscusS.setAttribute("data-emit-metadata", "0");
  giscusS.setAttribute("data-input-position", "top");
  giscusS.setAttribute("data-theme", "dark");
  giscusS.async = true;
  giscusS.crossOrigin = "anonymous";

  document.getElementById("giscus").appendChild(giscusS);
}

loadIssue();
