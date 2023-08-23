import PasswordReset from '../Components/PasswordReset';
import UserDetailsUpdate from '../Components/UserDetailsUpdate';

type BasePageProps = {
  path: string[];
};

const BasePage = ({ path }: BasePageProps) => {
  const url = path.join('/');

  if (url === 'password-reset') {
    return <PasswordReset />;
  }
  if (url === 'user-details-update') {
    return <UserDetailsUpdate />;
  }
  return <div>404 on user page {url}</div>;
};

export default BasePage;
