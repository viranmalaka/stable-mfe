import Billing from '../Components/Billing';
import Invoice from '../Components/Invoice';

type BasePageProps = {
  path: string[];
};

const BasePage = ({ path }: BasePageProps) => {
  const url = path && path.join('/');

  if (url === 'invoices') {
    return <Invoice />;
  }
  if (url === 'payments') {
    return <Billing />;
  }
  return <div>404 on feed manager {url}</div>;
};

export default BasePage;
