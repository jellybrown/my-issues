import axios from 'axios';
import type { IssueState } from '@/components/issues/types';

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

  async getIssue({
    owner,
    repo,
    state,
    page,
  }: {
    owner: string;
    repo: string;
    state: IssueState;
    page: number;
  }) {
    const BASE_ISSUE_API = `${this.client}/repos/${owner}/${repo}/issues?page=${page}`;
    const ISSUE_API = state === 'all' ? BASE_ISSUE_API : `${BASE_ISSUE_API}&state=${state}`;

    const { data } = await axios.get(ISSUE_API);
    return data;
  }
}

const GITHUB_CLIENT = 'https://api.github.com';
export const githubService = new GithubService(GITHUB_CLIENT);
