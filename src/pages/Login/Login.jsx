import { LoginForm } from "components/LoginForm/LoginForm";
import { MainTitle } from "components/common/MainTitle.styled";
import { PageContainer } from "components/common/PageContainer.styled";

const Login = () => {
  return (
    <PageContainer>
      <MainTitle>If you already have account, please log in</MainTitle>
      <LoginForm />
    </PageContainer>
  );
};

export default Login;