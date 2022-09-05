import React from "react";
import { RootTemplate } from "../../templates/Template";
import { ExplorePageBodyComponent } from "../../organisam/ExplorePageBody/ExplorePageBody";

export const ExplorePageComponent = () => {
  return (
    <RootTemplate
      body={
        <ExplorePageBodyComponent/>
      }
    />
  );
};
