import React, { useState } from "react";
import { Button, Input } from "../../components/ui";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <Input
        value={query}
        placeholder="검색어를 입력 후 센터를 누르세요"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>검색</Button>
    </div>
  );
};

export default SearchBar;
