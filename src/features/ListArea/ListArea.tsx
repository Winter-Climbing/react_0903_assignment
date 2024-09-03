import { useState } from "react";
import { Button } from "../../components/ui";
// import Modal from "../../components/ui/Modal";

type Contact = {
  name: string;
  phone: string;
  group: string;
  note?: string;
};

type ContactListProps = {
  contacts: Contact[];
  onDelete: (index: number) => void;
};

const ListArea = ({ contacts, onDelete }: ContactListProps) => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleDelete = (index: number) => {
    onDelete(index);
  };

  const handleShowDetails = (contact: Contact) => {
    setSelectedContact(contact);
  };

  // const handleCloseModal = () => {
  //   setSelectedContact(null);
  // };

  return (
    <div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={`${index}-${String(Symbol(contact.name))}`}>
            {contact.name} {contact.phone} {contact.group}
            <Button
              variant="secondary"
              onClick={() => handleShowDetails(contact)}
            >
              세부사항
            </Button>
            <Button variant="secondary" onClick={() => handleDelete(index)}>
              삭제
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListArea;
