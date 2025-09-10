"use client";

import { useEffect, useState } from "react";

export default function FacebookFeed() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Load SDK if not already loaded
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  useEffect(() => {
    if (mounted && (window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, [mounted]);

  // Don’t render anything during SSR
  if (!mounted) return null;

  return (
        <div className="flex justify-center pt-20">
            <div className="w-full max-w-lg">
                <div
                className="fb-page w-full"
                data-href="https://www.facebook.com/mjrsquaredllc"
                data-tabs="timeline"
                data-width="500" // keep 500 for desktop, CSS will scale down on mobile
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