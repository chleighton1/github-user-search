import { Octokit } from "octokit";
import { DateTime } from "luxon";

const octokit = new Octokit({
  auth: process.env.TOKEN,
});

export async function getData(username, setUserData) {
  try {
    const res = await octokit.request("GET /users/{username}", {
      username: username,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    console.log(res.status == 200);
    if (res.status == 200 && !Array.isArray(res.data)) {
      console.log(res);
      setUserData(() => ({
        name: res.data.name,
        avatar_url: res.data.avatar_url,
        login: res.data.login,
        joined: DateTime.fromISO(res.data.created_at),
        bio: res.data.bio,
        repos: res.data.public_repos,
        followers: res.data.followers,
        following: res.data.following,
        location: res.data.location,
        blog: res.data.blog,
        twitter: res.data.twitter_username,
        company: res.data.company,
      }));
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error("User not found");
  }
}
