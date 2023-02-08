import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode | string;
  href?: string;
  className?: string;
  type?: "submit" | "link";
  style?: "rounded-full" | "rounded" | "no-bg";
  onClick?: (e: React.SyntheticEvent) => void | undefined;
}

export const Button = ({
  children,
  href = "/",
  className,
  style = "no-bg",
  type = "link",
  onClick,
}: ButtonProps) => {
  const styleVariants = () => {
    switch (style) {
      case "rounded-full":
        return `mt-2 py-2 px-10 rounded-full bg-primary1 text-white text-center text-base lg:text-lg ${className}`;
      case "rounded":
        return `py-2 md:px-8 bg-primary1 text-white rounded-md text-md lg:text-lg ${className}`;
      case "no-bg":
        return `py-2 w-full text-center text-md lg:text-lg ${className}`;
    }
  };

  let buttonStyle = styleVariants();

  if (type === "link") {
    return (
      <Link
        href={href}
        className={buttonStyle}
        aria-label={`${children} link`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  } else if (type === "submit") {
    return (
      <button
        className={buttonStyle}
        onClick={onClick}
        aria-label={`${children} button`}
      >
        {children}
      </button>
    );
  }
};
