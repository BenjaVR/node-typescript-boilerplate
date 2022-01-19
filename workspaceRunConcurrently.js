const concurrently = require("concurrently");
const { workspaces } = require("./package.json");

function getWorkspaceName(workspacePath) {
  return workspacePath.split("/").pop();
}

function stringToColor(string) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    color += value.toString(16).padStart(2, "0").substring(0, 2);
  }
  return color;
}

function workspaceRunConcurrently(npmScript) {
  concurrently(
    workspaces.map((workspace) => ({
      name: getWorkspaceName(workspace),
      command: `npm run ${npmScript} -w "${workspace}" --if-present`,
    })),
    {
      cwd: __dirname,
      prefixColors: workspaces.map((workspace) => stringToColor(getWorkspaceName(workspace))),
    }
  );
}

module.exports = workspaceRunConcurrently;
