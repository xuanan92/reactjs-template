import SinglePost from "./SinglePost";
import { useGetPostsQuery } from "./postsSlice";

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery("List");
  let content;
  if (isLoading) {
    content = <div>...isLoading</div>;
  } else if (isSuccess) {
    content = posts.map((post) => <SinglePost key={post.id} post={post} />);
  } else if (isError) {
    content = <div>{error}</div>;
  }
  return (
    <div>
      <h1>This is Posts List</h1>
      {content}
    </div>
  );
};

export default PostsList;
