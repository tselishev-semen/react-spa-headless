import React from "react";
import { registerComponent } from "core/registry";

const HomePage = ({ renderContentSlot }) => <main>{renderContentSlot()}</main>;
registerComponent("pages/spa/home-page", HomePage);
