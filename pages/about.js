import React from "react";
import { registerComponent } from "core/registry";

const AboutPage = ({ title, message }) => (
  <main>
    <section>
      <h1>{title}</h1>
      <div>{message}</div>
    </section>
  </main>
);
registerComponent("pages/spa/about-page", AboutPage);
