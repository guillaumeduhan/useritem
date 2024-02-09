"use client";
import { type ReactPortal } from "react";
import { createPortal } from "react-dom";
import UserItem from "../UserItem";

interface PortalProps {
  children: React.ReactNode
}

export default function Portal(props: PortalProps): ReactPortal | null {
  const content = <UserItem {...props} />

  return typeof window !== 'undefined' ? createPortal(content, document.body) : null // createPortal will not be rendered on the server. Only on the client after hydration
}