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
  labels: string[];
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
  const [openIssues, setOpenIssues] = useState<Issue[]>([]);
  const [closedIssues, setClosedIssues] = useState<Issue[]>([]);

  useEffect(() => {
    getOpenOrClosedIssuesFromAPI();
  }, []);

  const getOpenOrClosedIssuesFromAPI = async () => {
    const result = await axios.get(
      "https://api.github.com/repos/rails/rails/issues"
    );
    const openIssuesFromAPI: Issue[] = [];
    const closedIssuesFromAPI: Issue[] = [];
    // eslint-disable-next-line array-callback-return
    result.data.map((issue: Issue) => {
      if (issue.state === "open") {
        openIssuesFromAPI.push(issue);
      } else {
        closedIssuesFromAPI.push(issue);
      }
      console.log("d", openIssuesFromAPI);
    });
    setOpenIssues(openIssuesFromAPI);
    setClosedIssues(closedIssuesFromAPI);
  };

  if (!openIssues) return <>...Loading</>;

  return (
    <>
      <h1>Issue Lists</h1>
      <div>
        open:<span>{openIssues.length}</span>
      </div>
      <div>
        close:<span>{closedIssues.length}</span>
      </div>
      {openIssues?.map((openIssue: Issue, index: number) => (
        <Issue key={index} id={openIssue.number} title={openIssue.title} />
      ))}
      {closedIssues?.map((closedIssue: Issue, index: number) => (
        <Issue key={index} id={closedIssue.number} title={closedIssue.title} />
      ))}
    </>
  );
};
