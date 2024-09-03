import { useState } from "react";
import ConfirmForm from "./features/InputCon/InputConPage";
import ListArea from "./features/ListArea/ListArea";
import SearchBar from "./features/Search/Search";

export type ContactType = {
  name: string;
  phone: string;
  group: string;
  note?: string;
};

function App() {
  const [contacts, setContacts] = useState<ContactType[]>([
    { name: "구본현", phone: "01012341234", group: "직장", note: "와아호완" },
    { name: "와앙", phone: "01012341234", group: "직장", note: "와아호완" },
    { name: "삭제", phone: "01012341234", group: "직장", note: "와아호완" },
    { name: "데북", phone: "01012341234", group: "직장", note: "와아호완" },
  ]);

  const handleAddContact = (contact: ContactType) => {
    const updatedContacts = [contact, ...contacts];
    setContacts(updatedContacts);
  };

  const handleDelete = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const handleSearch = (query: string) => {
    const filtered = contacts.filter(
      (contact) => contact.name.includes(query) || contact.phone.includes(query)
    );
    setContacts(filtered);
  };

  return (
    <>
      <header>연락처 리스트</header>
      <main>
        <ConfirmForm onAddList={handleAddContact} />
        <SearchBar onSearch={handleSearch} />
        <ListArea contacts={contacts} onDelete={handleDelete} />
      </main>
    </>
  );
}

export default App;
