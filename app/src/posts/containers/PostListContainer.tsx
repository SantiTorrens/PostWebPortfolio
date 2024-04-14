// PostListContainer.tsx
import { ReactElement, useState } from "react";
import { Post } from "../../types/post";
import { usePostStore } from "../../store/postSlice";
import Modal from "../../components/Modal";
import PostComments from "../components/PostComments";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";

interface PostListContainerProps {
  filterByTitle?: boolean;
  filterByUser?: boolean;
  posts: Post[];
}

export default function PostListContainer({
  filterByUser = false,
  filterByTitle = false,
  posts,
}: PostListContainerProps): ReactElement {

  const { postsUsers, postComments, showCommentsModal, closeCommentsModal } = usePostStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");

  const filteredPosts = posts.filter((post) => {
    const titleMatch = !filterByTitle || post.title.toLowerCase().includes(searchQuery.toLowerCase());

    const userMatch = !filterByUser || selectedUserId === "" || post.userId.toString() === selectedUserId;

    return titleMatch && userMatch;
  });

  const handleSearchChange = (value: string): void => {
    setSearchQuery(value);
  };

  const handleUserFilterChange = (userId: string): void => {
    setSelectedUserId(userId);
  };

  const handleResetUserFilter = (): void => {
    setSelectedUserId("");
  };

  return (
    <div className="h-[80vh] flex flex-col">
      <PostFilter
        filterByTitle={filterByTitle}
        filterByUser={filterByUser}
        onSearchChange={handleSearchChange}
        onUserFilterChange={handleUserFilterChange}
        onResetUserFilter={handleResetUserFilter}
        users={postsUsers}
        selectedUserId={selectedUserId}
      />
      <PostList posts={filteredPosts} />
      {showCommentsModal && (
        <Modal closeModal={() => closeCommentsModal()}>
          <PostComments
            post={filteredPosts.find((post) => post.id === postComments[0].postId) ?? null}
            postComments={postComments}
          />
        </Modal>
      )}
    </div>
  );
}
