import { useEffect } from "react";

export default function usePageTitle(pageTitle?: string, omitSuffix = false) {
  useEffect(() => {
    const suffix = "My App";
    const title = pageTitle || suffix;
    if (omitSuffix) {
      document.title = title;
    } else {
      document.title = `${title} - ${suffix}`;
    }
  }, [omitSuffix, pageTitle]);
}
