import React, { useState, useEffect } from "react";
import axios from "axios";
import { Issue } from "../components/Issue";

interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  labels: string | string[];
  state: string;
  locked: boolean;
  assignee: null;
  assignees: string[];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  author_association: string;
  active_lock_reason: string;
  body: string;
}

export const IssueList: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    getIssuesFromAPI();
  }, []);

  const getIssuesFromAPI = async () => {
    const result = await axios.get(
      "https://api.github.com/repos/rails/rails/issues"
    );
    const issuesFromAPI = result.data;
    setIssues(issuesFromAPI);
  };

  if (!issues) return <>Loading</>;

  return (
    <>
      {issues?.map((issue: Issue) => (
        <Issue key={issue.id} id={issue.number} title={issue.title} />
      ))}
    </>
  );
};
