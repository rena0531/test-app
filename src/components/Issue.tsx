import React from "react";
import { useHistory } from "react-router-dom";

interface IssueProps {
  id: number;
  title: string;
}

export const Issue: React.FC<IssueProps> = ({ id, title }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/detail/${id}`);
  };

  return (
    <div>
      <div onClick={handleClick}>{title}</div>
    </div>
  );
};
