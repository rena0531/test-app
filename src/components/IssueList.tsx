import React, { useState, useEffect } from "react";
import axios from "axios";

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

const URL = "https://api.github.com/repos/rails/rails/issues";

export const IssueList: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((results) => {
        console.log("results", results);
        const res = results.data;
        setIssues(res);
      })
      .catch((error) => {
        console.log("通信失敗");
        console.log(error.status);
      });
  }, [issues]);

  return (
    <>
      {issues.map((issue: Issue, index: number) => (
        <div key={index}>{issue.title}</div>
      ))}
    </>
  );
};
