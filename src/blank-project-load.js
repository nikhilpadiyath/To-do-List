export const blankProjectLoad = ()=> {
    console.log("Called blankProjectLaod Module, creating balnk prject array now");
    let projectArray = [];
    let projectTitle = "Default project";
    projectArray.push({projectTitle});
    console.log(projectArray);
    return {projectArray, projectTitle};
}