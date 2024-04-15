import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useUserStore } from "../../store/userSlice";
import Header from '../../components/Header';

jest.mock("../../store/userSlice");

describe("Header component", () => {
  const mockUseUserStore = useUserStore as jest.MockedFunction<typeof useUserStore>;

  beforeEach(() => {
    mockUseUserStore.mockReturnValue({ isLoggedIn: false });
  });

  test("renders navigation links correctly", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Postifly")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("renders dashboard link when user is logged in", () => {
    mockUseUserStore.mockReturnValue({ isLoggedIn: true });

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  test("activates correct link based on current location", () => {
    render(
      <MemoryRouter initialEntries={["/posts"]}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).not.toHaveClass("text-black");
    expect(screen.getByText("Posts")).toHaveClass("text-black");
  });

});
