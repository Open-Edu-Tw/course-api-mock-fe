import Tag from "../Tag/Tag";
import Tags from "../Tag/Tags";
import SearchBar from "./SearchBar";
import SearchBarLogoComponent from "./SearchBarLogo";

export default function SearchArea({ tags }) {
  return (
    <section className="flex items-center justify-center search-section">
      <div className="space-y-4">
        <SearchBarLogoComponent />
        <SearchBar />
        <Tags>
          {tags.map((tagName) => (
            <Tag key={tagName}>{tagName}</Tag>
          ))}
        </Tags>
      </div>
    </section>
  );
}
