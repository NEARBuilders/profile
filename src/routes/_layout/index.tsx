import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_layout/")({
  component: Home,
});

function Home() {
  return (
    <div>
      Home Route <Link to="/balls">go balls deep</Link>
    </div>
  );
}
