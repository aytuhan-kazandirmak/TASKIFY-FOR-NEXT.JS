import FormComponent from "@/components/form-component";
import MyFragment from "@/components/fragment";
import React from "react";

const CreateAccountContainer = () => {
  return (
    <MyFragment>
      <FormComponent genre="signUp" />
    </MyFragment>
  );
};

export default CreateAccountContainer;
