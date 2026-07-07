import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import githubIcon from "./assets/githubIcon.png";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    chrome.storage.local.get("enabled", (result) => {
      setEnabled(result.enabled || false);
    });
  }, []);

  const toggle = () => {
    const newVal = !enabled;
    setEnabled(newVal);
    chrome.storage.local.set({ enabled: newVal });
  };

  return (
    <div className="popup">
      <div className="header">
        <h1>LinkedIn Blocker</h1>
        <p>Block posts from your connections.</p>
      </div>

      <div className="content">
        <div className="toggle-row" onClick={toggle}>
          <div>
            <h3>{enabled ? "Disable Extension" : "Enable Extension"}</h3>
            {/* <span>{enabled ? "Blocking posts" : "Disabled"}</span> */}
          </div>

          <Switch checked={enabled} onChange={toggle} />
        </div>
      </div>

      <div className="footer">
        <a href="https://github.com/balajiNadar08/Linkedin-blocker-chrome-extension" target="_blank">
          <img src={githubIcon} alt="GitHub Icon" />
        </a>
        <span>v1.0.0</span>
      </div>
    </div>
  );
}

export default App;
