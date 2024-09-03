import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

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
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
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
          {groups.map((group, index) => (
            <li key={index}>
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

const modalStyles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    maxWidth: "80%",
  },
};

export default Modal;
