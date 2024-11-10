import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <h1>Sign-In page</h1>
      <SignIn />
    </>
  );
}
