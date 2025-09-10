"use client";

import { useEffect, useState } from "react";

export default function FacebookFeed() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Load the Facebook SDK if it hasn't been loaded yet
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      // Wait for SDK to load and parse the plugin
      script.onload = () => {
        window.FB?.XFBML.parse();
      };
    } else {
      // If SDK is already loaded, parse immediately
      window.FB?.XFBML.parse();
    }
  }, []);

  // Don't render anything during SSR to avoid hydration errors
  if (!mounted) return null;

  return (
    <div className="flex justify-center pt-20">
      <div className="w-full max-w-lg">
        <div
          className="fb-page w-full"
          data-href="https://www.facebook.com/mjrsquaredllc"
          data-tabs="timeline"
          data-width="500"
          data-height="600"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/mjrsquaredllc"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/mjrsquaredllc">MJR Squared LLC</a>
          </blockquote>
        </div>
      </div>
    </div>
  );
}