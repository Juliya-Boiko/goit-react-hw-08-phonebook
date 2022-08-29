import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { MainTitle } from "components/common/MainTitle.styled";
import { PageContainer } from "components/common/PageContainer.styled";

const Register = () => {
  return (
    <PageContainer>
      <MainTitle>For creating youre own contacts list please register</MainTitle>
      <RegisterForm />
    </PageContainer>
  );
};

export default Register;