import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.TOKEN,
});

export async function getData(username) {
  const res = await octokit.request("GET /users/{username}", {
    username: username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return res.data;
}
