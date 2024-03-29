import { render, screen } from "@testing-library/react";
import { SignInWithGitlab } from "./SignInWithGitlab";

describe("<SignInWithGitlab />", () => {
  it("renders without crashing", () => {
    const { container } = render(<SignInWithGitlab />);
    expect(container.firstChild).toBeDefined();
  });

  it("displays the default text", () => {
    render(<SignInWithGitlab />);
    const signInText = screen.getByText(/Sign in with Gitlab/i);
    expect(signInText).toBeInTheDocument();
  });

  it("displays the given text", () => {
    render(<SignInWithGitlab name={"Gitlab"} />);
    const signInText = screen.getByText(/Gitlab/i);
    expect(signInText).toBeInTheDocument();
  });
});
