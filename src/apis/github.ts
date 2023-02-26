import axios from 'axios';

class GithubService {
  constructor(public client: string) {}

  async getRepo({ owner, repo }: { owner: string; repo: string }) {
    const { data } = await axios.get(`${this.client}/${owner}/${repo}`);
    return data;
  }

  async searchRepo({ query }: { query: string }) {
    const { data } = await axios.get(`${this.client}/search/repositories?q=${query}`);
    return data;
  }

  async getIssue({ owner, repo }: { owner: string; repo: string }) {
    const { data } = await axios.get(`${this.client}/${owner}/${repo}/issues`);
    return data;
  }
}

const GITHUB_CLIENT = 'https://api.github.com';
export const githubService = new GithubService(GITHUB_CLIENT);
