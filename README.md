### 起動方法
$ `yarn start`

### コンポーネント設計
- pages
    - 一覧画面：IssueList
    - 詳細画面：IssueDetail
    - Authorでの絞り込み：IssueByAuthor
    - Labelでの絞り込み：IssueByLabel
    - Assigneeでの絞り込み：IssueByAssignee
    - Sortでの絞り込み：IssueBySort
- components
    - Issue
    - Label
    - Assignee

### 状態モデリングとデータフロー設計
<img width="590" alt="スクリーンショット 2020-06-17 18 28 43" src="https://user-images.githubusercontent.com/39933198/84881301-a10aaa80-b0c8-11ea-842d-6da99b162d6c.png">

### ルーティング設計
- `/` : IssueList
- `/detail/:id` : IssueDetail
- `/:author` : IssueByAuthor
- `/:label` : IssueByLabel
- `/:assignee` : IssueByAssignee
- `/:sort` : IssueBySort