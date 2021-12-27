import { SearchIcon } from "@heroicons/react/outline";

export default function SearchBar() {
  return (
    <div className="search-bar flex space-x-4 justify-center">
      <input
        type="input"
        className="border rounded-2xl py-1 px-2 w-72 bg-neutral-100"
      ></input>
      <SearchIcon width="1em" />
    </div>
  );
}
