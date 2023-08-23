import DraftsIcon from '@mui/icons-material/Drafts';
import UserIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';

const NavConfig = {
  menu: [
    {
      key: 'user',
      label: 'User',
      icon: <UserIcon />,
      children: [
        {
          key: 'user/password-reset',
          label: 'Password Reset',
          icon: <SendIcon />,
        },
        {
          key: 'user/user-details-update',
          label: 'User Details Update',
          icon: <DraftsIcon />,
        },
      ],
    },
  ],
};

export default NavConfig;
