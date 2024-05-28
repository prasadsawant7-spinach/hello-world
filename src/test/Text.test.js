import { render, screen } from "@testing-library/react";
import Text from "../components/Text";

test("Text", () => {
  it("renders the Text component text message", () => {
    render(<Text />);
    const message = screen.queryByText(/Hello Vite + React!/i);
    expect(message).toBeDefined();
  });
});
