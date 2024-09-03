import React, { useState } from "react";
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
    { name: "구본현", phone: "01012341234", group: "직장" },
    { name: "와앙", phone: "01012341234", group: "직장" },
    { name: "삭제", phone: "01012341234", group: "직장" },
    { name: "데북", phone: "01012341234", group: "직장" },
  ]);

  const [filteredContacts, setFilteredContacts] =
    useState<ContactType[]>(contacts);

  const addContact = (contact: ContactType) => {
    const updatedContacts = [contact, ...contacts];
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  };

  const handleDelete = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  };

  const handleSearch = (query: string) => {
    const filtered = contacts.filter(
      (contact) =>
        contact.name.includes(query) ||
        contact.phone.includes(query) ||
        contact.group.includes(query)
    );
    setFilteredContacts(filtered);
  };

  return (
    <>
      <header>연락처 리스트</header>
      <main>
        <ConfirmForm onAddList={addContact} />
        <SearchBar onSearch={handleSearch} />
        <ListArea contacts={filteredContacts} onDelete={handleDelete} />
      </main>
    </>
  );
}

export default App;
