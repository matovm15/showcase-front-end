// useTitle Hook

import { useEffect } from "react";

const useTitle = (title) => {
  let defaultTitle = "Show Case";

  useEffect(() => {
    document.title = `${title} | ${defaultTitle}` || defaultTitle;
  }, [title]);
};

export default useTitle;
