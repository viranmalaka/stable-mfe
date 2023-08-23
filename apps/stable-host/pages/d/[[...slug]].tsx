import { useRouter } from 'next/router';

import FeedManagerBase from 'feedManager/base-page';
import UserAccountBase from 'userAccount/base-page';

const RemoteMap = {
  user: UserAccountBase,
  'feed-manager': FeedManagerBase,
};

const BaseRouteHandler = () => {
  const router = useRouter();

  const { slug } = router.query;

  let root = '',
    restPath;
  if (slug && Array.isArray(slug)) {
    [root, ...restPath] = slug as string[];
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Comp = RemoteMap[root];

  if (Comp) {
    return <Comp path={restPath} />;
  }
  return <div> 404</div>;
};

export default BaseRouteHandler;
