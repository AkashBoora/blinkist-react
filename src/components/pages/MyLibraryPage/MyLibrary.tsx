import React from "react";
import { RootTemplate } from "../../templates/Template";
import { MyLibraryPageBodyComponent } from "../../organisam/MyLibraryPageBody.tsx/MyLibraryPageBody";



export const MyLibraryPageComponent = () => {
  return (
    <RootTemplate
      body={
        <MyLibraryPageBodyComponent/>
      }
    />
  );
};
