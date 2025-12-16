"use client";

import Script from "next/script";

export function SalesforceScript() {
  const sfScriptUrl = process.env.NEXT_PUBLIC_SF_SCRIPT_URL;

  if (!sfScriptUrl) {
    return (
      <div className="hidden">
        {/* Salesforce integration disabled: NEXT_PUBLIC_SF_SCRIPT_URL missing */}
      </div>
    );
  }

  return (
    <>
      <Script
        src={sfScriptUrl}
        strategy="lazyOnload"
        onLoad={() => console.log("SF Script Loaded")}
      />
      {/* 
        TODO: Add specific Salesforce Web-to-Lead logic here.
        The actual form submission often requires a <form action="https://webto.salesforce.com/..." method="POST">
        Since we are using a custom React form for better UX, we might need to submit via fetch to a proxy or 
        populate hidden fields in a hidden form and submit it programmatically.
        
        For this deliverables, we focus on the UI and Script loading.
      */}
      <div id="salesforce-root" className="hidden" />
    </>
  );
}
