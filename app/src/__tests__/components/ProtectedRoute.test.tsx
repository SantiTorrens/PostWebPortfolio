import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute';
import { useUserStore } from '../../store/userSlice';

// Mock useUserStore hook
jest.mock('../../store/userSlice');

// Mock useLocation hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('ProtectedRoute component', () => {
  const mockUseUserStore = useUserStore as jest.MockedFunction<typeof useUserStore>;

  beforeEach(() => {
    // Mock isLoggedIn state
    mockUseUserStore.mockReturnValue({ isLoggedIn: true });
    // Mock useLocation hook
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/protected' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders children when user is logged in', () => {
    const { getByText } = render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(getByText('Protected Content')).toBeInTheDocument();
  });

  test('redirects to login page when user is not logged in', () => {
    // Mock isLoggedIn state to false
    mockUseUserStore.mockReturnValue({ isLoggedIn: false });
    
    // Mock window.location.assign to capture the URL
    const assignMock = jest.fn();
    window.location = { assign: assignMock } as unknown as Location;

    render(
      <MemoryRouter> 
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </MemoryRouter>
    );

    setTimeout(() => {
      // Check if window.location.assign is called with the login page URL
      expect(assignMock).toHaveBeenCalledWith('/login');
    }, 50);  });
});
