import * as React from "react";

export default function BackLink({
  text = "Back",
  href = "#",
  children
}: IBackLink) {
  return (
    <a href={href} className="govuk-back-link">
      {children ? children : text}
    </a>
  );
}

declare global {
  interface IBackLink {
    text?: string;
    href?: string;
    children?: any;
  }
  function BackLink({ text, href }: IBackLink): JSX.Element;
  function BackLink({ children, href }: IBackLink): JSX.Element;
}
