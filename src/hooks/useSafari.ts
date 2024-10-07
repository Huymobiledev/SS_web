import { useState, useEffect } from "react";

export const useSafariVersion = () => {
    // Set the type to be either string or null
    const [safariVersion, setSafariVersion] = useState<string | null>(null);
  
    useEffect(() => {
      const userAgent = navigator.userAgent;
  
      // Check if the browser is Safari
      const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
  
      if (isSafari) {
        // Extract the version
        const versionMatch = userAgent.match(/version\/(\d+\.\d+)/i);
        setSafariVersion(versionMatch ? versionMatch[1] : '0');
      } else {
        setSafariVersion('-1');
      }
    }, []);
  
    return safariVersion;
  };