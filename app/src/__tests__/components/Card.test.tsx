import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import Card from "../../components/Card";

describe("Card component", () => {
  test("renders children correctly", () => {
    const { getByText } = render(
      <Card>
        <div>Test Child</div>
      </Card>
    );

    expect(getByText("Test Child")).toBeInTheDocument();
  });

  test("applies custom classes correctly", () => {
    const { container } = render(
      <Card classes="custom-class">
        <div>Test Child</div>
      </Card>
    );

    expect(container.firstChild).toHaveClass("bg-blue-300", "p-2", "rounded-xl", "custom-class");
  });

  test("applies no custom classes if not provided", () => {
    const { container } = render(
      <Card>
        <div>Test Child</div>
      </Card>
    );

    expect(container.firstChild).toHaveClass("bg-blue-300", "p-2", "rounded-xl");
  });
});
