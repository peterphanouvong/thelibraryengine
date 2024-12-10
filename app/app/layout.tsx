import { ReactNode } from "react";

export default function AppLayout(props: { children: ReactNode }) {
  return <div>{props.children}</div>;
}
