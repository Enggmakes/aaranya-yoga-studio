import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tratak")({
  beforeLoad: () => {
    throw redirect({
      to: "/individuals",
    });
  },
  component: () => null,
});
