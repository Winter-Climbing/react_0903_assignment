import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./Modal.css";

type ModalProps = {
  groups: string[];
  onAddGroup: (group: string) => void;
  onRemoveGroup: (group: string) => void;
  onClose: () => void;
};

const Modal = ({ groups, onAddGroup, onRemoveGroup, onClose }: ModalProps) => {
  const [newGroup, setNewGroup] = useState("");

  const handleAddGroup = () => {
    if (newGroup.trim()) {
      onAddGroup(newGroup.trim());
      setNewGroup("");
    }
  };

  return (
    <div className="overlay">
      <div className="content">
        <h2>그룹 관리</h2>
        <div>
          <Input
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
            placeholder="새 그룹 이름"
          />
          <Button onClick={handleAddGroup}>추가</Button>
        </div>
        <ul>
          {groups.map((group) => (
            <li key={`${String(Symbol(group))}`}>
              {group}
              <Button onClick={() => onRemoveGroup(group)}>삭제</Button>
            </li>
          ))}
        </ul>
        <Button onClick={onClose}>닫기</Button>
      </div>
    </div>
  );
};

export default Modal;
