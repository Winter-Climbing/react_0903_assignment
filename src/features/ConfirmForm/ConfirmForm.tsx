import React, { useState } from "react";
import { Button, Input, Modal } from "../../components/ui/index.ts";
import { createPortal } from "react-dom";
import { ContactType } from "../../App.tsx";
import useModal from "../../hooks/useModal";

type ConfirmFormProps = {
  onAddList: (contact: ContactType) => void;
};

const initialGroups = ["가족", "직장", "친구"];

const ConfirmForm = ({ onAddList }: ConfirmFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    note: "",
    group: "",
  });

  const [groups, setGroups] = useState<string[]>(initialGroups);
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      group: e.target.value,
    });
  };

  const addGroup = (newGroup: string) => {
    if (!groups.includes(newGroup)) {
      setGroups([...groups, newGroup]);
    }
  };

  const removeGroup = (groupToRemove: string) => {
    setGroups(groups.filter((group) => group !== groupToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddList(formData);
    setFormData({ name: "", phone: "", note: "", group: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label={"이름"}
          name={"name"}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          label={"전화번호"}
          type={"tel"}
          name={"phone"}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Input
          label={"간단한기록"}
          name={"note"}
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <div>
          <label>
            그룹:
            <select
              name="group"
              value={formData.group}
              onChange={handleGroupChange}
            >
              {groups.map((group) => (
                <option key={`${String(Symbol(group))}`} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </label>
          <Button type="button" onClick={openModal}>
            조직 추가
          </Button>
        </div>
        <Button type="submit">제출</Button>
      </form>

      {isModalOpen &&
        createPortal(
          <Modal
            groups={groups}
            onAddGroup={addGroup}
            onRemoveGroup={removeGroup}
            onClose={closeModal}
          />,
          document.body
        )}
    </div>
  );
};

export default ConfirmForm;
