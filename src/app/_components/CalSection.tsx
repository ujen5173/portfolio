"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      calLink="ujen51743/30min"
      style={{
        position: "relative",
        zIndex: "70",
        width: "100%",
        height: "100%",
        overflow: "scroll",
      }}
      config={{ layout: "month_view" }}
    />
  );
}
