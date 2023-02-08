import React from "react";

interface BlankPageProps {
  page: string;
}

export const BlankPage = ({ page }: BlankPageProps) => {
  return (
    <section className="h-screen">
      <h1>{page} Page</h1>
      <p>Sorry, this page is blank 🥲</p>
    </section>
  );
};
