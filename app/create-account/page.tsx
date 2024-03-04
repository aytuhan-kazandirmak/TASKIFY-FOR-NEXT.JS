import CreateAccountContainer from "@/containers/create-account-container";
import React from "react";
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const CreateAccountPage = async () => {
  await delay(5000);
  return <CreateAccountContainer />;
};

export default CreateAccountPage;
