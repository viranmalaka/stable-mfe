import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import InboxIcon from '@mui/icons-material/Mail';

const NavConfig = {
  menu: [
    {
      key: 'feed-manager',
      label: 'Feed Manager',
      icon: <DynamicFeedIcon />,
      children: [
        {
          key: 'feed-manager/invoices',
          label: 'Inbox - Invoices',
          icon: <InboxIcon />,
        },
        {
          key: 'feed-manager/payments',
          label: 'Inbox - payments',
          icon: <InboxIcon />,
        },
      ],
    },
  ],
};

export default NavConfig;
