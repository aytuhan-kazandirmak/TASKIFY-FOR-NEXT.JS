import MyFragment from "@/components/fragment";
import styles from "./styles.module.css";

import FormComponent from "@/components/form-component";
const LoginPageContainer = () => {
  return (
    <MyFragment>
      <FormComponent genre="login" />
    </MyFragment>
  );
};

export default LoginPageContainer;
