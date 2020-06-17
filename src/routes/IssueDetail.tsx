import React from "react";
import { useLocation } from "react-router-dom";

export const IssueDetail: React.FC = () => {
  const location = useLocation();
  const issue = location.state;
  //console.log(issue);

  return (
    <>
      {issue ? <h1>{(issue as any).title}</h1> : <div>データはありません</div>}
    </>
  );
};
