"use client";
import { useEffect } from "react";

const DevRegistrationForm = () => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "46783808",
            formId: "c68e3fa1-5775-4139-820e-d8cd123a1045",
            target: "#hubspot-form",
          });
        }
      };
      document.body.appendChild(script);
    };

    // Load the script if not already loaded
    if (!window.hbspt) {
      loadScript();
    } else {
      window.hbspt.forms.create({
        portalId: "46783808",
        formId: "c68e3fa1-5775-4139-820e-d8cd123a1045",
        target: "#hubspot-form",
      });
    }
  }, []);

  return (
    <div>
      <h3 className="font-bold uppercase text-theme-accent mb-4">
        Registration
      </h3>
      <div id="hubspot-form"></div>
    </div>
  );
};

export default DevRegistrationForm;
