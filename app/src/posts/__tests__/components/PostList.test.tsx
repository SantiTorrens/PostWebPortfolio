import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import { Post } from '../../../types/post';
import PostList from '../../components/PostList';
import PostItem from '../../components/PostItem';

// Mock PostItem component
jest.mock("../../components/PostItem", () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

describe("PostList component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const posts: Post[] = [
    { userId: 1, id: 1, title: "Post 1", body: "Body of post 1" },
    { userId: 2, id: 2, title: "Post 2", body: "Body of post 2" },
  ];

  test("renders without crashing", () => {
    const { container } = render(<PostList posts={[]} />);
    expect(container).toBeInTheDocument();
  });

  test("renders all posts", () => {
    render(<PostList posts={posts} />);
    expect(PostItem).toHaveBeenCalledTimes(posts.length);
  });

});
