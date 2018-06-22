import * as classNames from "classnames";
import * as React from "react";

interface IButton {
  text: string;
  disabled: boolean;
}

export default function Button({ text, disabled = false }: IButton) {
  let props = {};

  if (disabled) {
    props = {
      ...props,
      ariaDisabled: true,
      disabled: "disabled"
    };
  }

  return (
    <button
      type="submit"
      className={classNames("govuk-button", {
        "govuk-button--disabled": disabled
      })}
      {...props}
    >
      {text}
    </button>
  );
}
