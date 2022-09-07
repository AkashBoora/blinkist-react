import { Box } from "@mui/material";
import { RootTemplate } from "../../templates/Template";
import { BookDetailsComponenet } from "../../organism/BookDetails/BookDetails";

export interface BookDetailsPageComponentProps {}


export const BookDetailsPageComponent = (
  props: BookDetailsPageComponentProps
) => {
  return (
    <RootTemplate
      body={
        <div>
          <Box data-testid="bookDetailsPage"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "912px",
              justifyContent: "center"
            }}
          >
             <BookDetailsComponenet />
          </Box>
        </div>
      }
    />
  );
};
