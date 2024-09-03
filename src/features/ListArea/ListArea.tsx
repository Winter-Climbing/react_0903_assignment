import { Button } from "../../components/ui";

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
  const handleDelete = (index: number) => {
    onDelete(index);
  };

  return (
    <div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={`${index}-${String(Symbol(contact.name))}`}>
            {contact.name} {contact.phone} {contact.group}
            <Button variant="secondary">세부사항</Button>
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
