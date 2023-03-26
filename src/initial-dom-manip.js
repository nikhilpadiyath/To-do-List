import { blankProjectLoad } from "./blank-project-load.js";

export function initialdomManip () {
    const contentDiv = document.querySelector(".content");
    const heading = document.createElement("h1");
    heading.textContent = "To Do App";
    contentDiv.appendChild(heading);

    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}