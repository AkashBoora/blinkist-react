import React from "react";
import { RootTemplate } from "../../templates/Template";
import { MyLibraryPageBodyComponent } from "../../organism/MyLibraryPageBody.tsx/MyLibraryPageBody";



export const MyLibraryPageComponent = () => {
  return (
    <RootTemplate
      body={
        <MyLibraryPageBodyComponent/>
      }
    />
  );
};
