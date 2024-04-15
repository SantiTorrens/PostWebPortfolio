import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import Footer from '../../components/Footer';

describe("Footer component", () => {
  test("renders text correctly", () => {
    render(<Footer />);

    const firstSpan = screen.getByText("All Rights Reserved 2024");
    const secondSpan = screen.getByText("Santiago Torrens");

    expect(firstSpan).toBeInTheDocument();
    expect(secondSpan).toBeInTheDocument();
  });

  test("applies correct styles", () => {
    render(<Footer />);

    const footerContainer = screen.getByTestId("footer-container");

    expect(footerContainer).toHaveClass("w-full", "h-20", "bg-gray-400", "mt-auto");
    
  });
});
