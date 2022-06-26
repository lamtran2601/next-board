import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    if (!window.location.href.includes('/templates')) {
      const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
      });
      return () => {
        unlisten();
      };
    }
  });

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
