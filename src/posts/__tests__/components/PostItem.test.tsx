import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen } from '@testing-library/react';
import PostItem from '../../components/PostItem';
import { usePostStore } from '../../../store/postSlice';
import { useUserStore } from '../../../store/userSlice';
import { Post } from '../../../types/post';

// Mock usePostStore and useUserStore hooks
jest.mock('../../../store/postSlice');
jest.mock('../../../store/userSlice');

describe('PostItem component', () => {
  const mockUseUserStore = useUserStore as jest.MockedFunction<typeof useUserStore>;
  const mockUsePostStore = usePostStore as jest.MockedFunction<typeof usePostStore>;

  const post: Post = {
    userId: 1,
    id: 1,
    title: 'Test Post',
    body: 'This is a test post.',
  };

  it('renders correctly', () => {
    mockUsePostStore.mockReturnValue({
      savedPosts: [],
      setPostComments: jest.fn(),
      deletePost: jest.fn(),
      savePost: jest.fn(),
      unSavePost: jest.fn(),
    });
    mockUseUserStore.mockReturnValue({
      isLoggedIn: true,
    });

    const { getByText } = render(<PostItem post={post} />);
    expect(getByText('Test Post')).toBeInTheDocument();
    expect(getByText('This is a test post.')).toBeInTheDocument();
  });

  it('calls savePost when save button is clicked', () => {
    const savePostMock = jest.fn();
    mockUsePostStore.mockReturnValue({
      savedPosts: [],
      setPostComments: jest.fn(),
      deletePost: jest.fn(),
      savePost: savePostMock,
      unSavePost: jest.fn(),
    });
    mockUseUserStore.mockReturnValue({
      isLoggedIn: true,
    });

    render(<PostItem post={post} />);
    const saveButton = screen.getByTitle('save');

    fireEvent.click(saveButton);

    expect(savePostMock).toHaveBeenCalledWith(post);
  });

  it('calls unSavePost when unsave button is clicked', () => {
    const unSavePostMock = jest.fn();
    mockUsePostStore.mockReturnValue({
      savedPosts: [post],
      setPostComments: jest.fn(),
      deletePost: jest.fn(),
      savePost: jest.fn(),
      unSavePost: unSavePostMock,
    });
    mockUseUserStore.mockReturnValue({
      isLoggedIn: true,
    });
    render(<PostItem post={post} />);

    const unSaveButton = screen.getByTitle('unSave');

    fireEvent.click(unSaveButton);

    expect(unSavePostMock).toHaveBeenCalledWith(post);
  });
});
