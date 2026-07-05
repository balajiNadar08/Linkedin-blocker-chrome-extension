import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: "LinkedIn Feed Blocker",
  version: "1.0.0",
  description: "Hide LinkedIn posts based on your preferences.",
  permissions: ["storage"],
  host_permissions: ["https://www.linkedin.com/*"],
  action: {
    default_popup: "index.html",
    default_title: "LinkedIn Feed Blocker",
  },
  content_scripts: [
    {
      matches: ["https://www.linkedin.com/*"],
      js: ["src/content.js"],
    },
  ],
  // icons: {
  //   16: "icon16.png",
  //   48: "icon48.png",
  //   128: "icon128.png",
  // },
});
