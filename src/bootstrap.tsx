import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Profile } from "./components/Profile";
import "./index.css";
import { getProfile } from "./lib/social";

/** Only for local testing and development */
const render = async () => {
  const root = document.getElementById("root");
  const accountId = "efiz.near"; // Example accountId

  try {
    const profile = await getProfile(accountId);

    if (root) {
      ReactDOMClient.createRoot(root).render(
        <React.StrictMode>
          {profile ? (
            <Profile profile={profile} accountId={accountId} />
          ) : (
            <div>No profile found for {accountId}</div>
          )}
        </React.StrictMode>,
      );
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    if (root) {
      ReactDOMClient.createRoot(root).render(
        <React.StrictMode>
          <div>Error loading profile. Please try again later.</div>
        </React.StrictMode>,
      );
    }
  }
};

render();
