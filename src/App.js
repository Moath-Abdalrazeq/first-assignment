import "./App.css";
import PageHeader from "./components/Header/PageHeader";
import Post from "./components/Post/Post";
import TagButton from "./components/TagButton/TagButton";

function App() {
  
  return (
    <div>
      <PageHeader header="Gaza Sky Geeks" />
      <div className="content-container">
        <div className="content ">
          <Post title="This is a post title" body="This is a post body" />
        </div>
        <TagButton />
      </div>
    </div>
  );
}

export default App;
