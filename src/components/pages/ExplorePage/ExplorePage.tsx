import React from "react";
import { RootTemplate } from "../../templates/Template";
import { ExplorePageBodyComponent } from "../../organism/ExplorePageBody/ExplorePageBody";

export const ExplorePageComponent = () => {
  return (
    <RootTemplate
      body={
        <ExplorePageBodyComponent/>
      }
    />
  );
};
