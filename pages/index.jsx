import Container from "../components/Base/Container";
import Navbar from "../components/Navbar/Navbar";
import SearchArea from "../components/Search/SearchArea";
import tagData from "../data/tags.json";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <SearchArea tags={tagData.data} />
    </Container>
  );
}
