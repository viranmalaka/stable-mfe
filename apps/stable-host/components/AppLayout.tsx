import { PropsWithChildren } from 'react';
import AppHeader from './AppHeader';
import AppMenu from './AppMenu';

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <AppHeader />
      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        <div style={{ flexBasis: '250px' }}>
          <AppMenu />
        </div>
        <div style={{ flex: 'auto', padding: '20px' }}>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
