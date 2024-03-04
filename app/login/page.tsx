import LoginPageContainer from "@/containers/login-container";
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const LoginPage = async () => {
  await delay(5000);
  return <LoginPageContainer />;
};

export default LoginPage;
