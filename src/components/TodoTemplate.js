//화면을 가운데 정렬 시켜 주며 앱 타이틀 관리를 보여준다. children 으로 내부 jsx를 props로 받아와서 렌더릴 해 줌
import React from "react";
import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
};
export default TodoTemplate;
