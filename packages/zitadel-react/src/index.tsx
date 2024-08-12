import "./styles.css";
import { computeColor } from "./utils/colors";

export { SignInWithGoogle } from "./components/SignInWithGoogle";

export { SignInWithGitlab } from "./components/SignInWithGitlab";

export { SignInWithAzureAD } from "./components/SignInWithAzureAD";

export { SignInWithGithub } from "./components/SignInWithGithub";

export { ZitadelReactProvider, type ZitadelReactProps } from "./components/ZitadelReactProvider";

export { SignInWithIDP, type SignInWithIDPProps } from "./components/SignInWithIDP";

computeColor("dark");
