import { useState, type KeyboardEvent } from "react";
import { Button, Input } from "../../components/ui";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.SearchBarBox}>
      <Input
        value={query}
        placeholder="검색어를 입력 후 엔터를 누르거나 검색 버튼을 클릭하세요"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Button onClick={handleSearch}>검색</Button>
    </div>
  );
};

export default SearchBar;
