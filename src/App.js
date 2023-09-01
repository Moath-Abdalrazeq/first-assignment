import "./App.css";
import PageHeader from "./Header/PageHeader";
import Post from "./Post/Post";
import TagButton from "./TagButton/TagButton";

function App() {
  return (
    <div>
      <PageHeader />
      <div className="content-container">
        <div className="content ">
          <Post />
        </div>
        <TagButton />
      </div>
    </div>
  );
}

export default App;
