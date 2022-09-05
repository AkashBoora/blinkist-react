import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Theme from "../../../Themes/themes";
import { IconComponent } from "../../atoms/Icon/Icon";
import Search from "./../../../assets/icons/search.svg";

const useStyles = makeStyles({
  boxElement: {
    width: 658,
    height: 46,
    backgroundColor: "ehite",
    borderBottom: `2px solid ${Theme.palette.grey_scale.light}`,
    display: "flex",
    flexDirection: "row",
    gap: Theme.spacing(4),
    alignItems: "center",
    flex: "none",
    order: 1,
    flexGrow: 0,
  },
  inputBar: {
    fontSize: "24px",
    border: "none",
    width: 400,
    height: 30,
    fontWeight: 700,
    fontFamily: "Cera Pro",
    "&:focus": {
      outline: "none",
    },
  },
});

export interface SearchBarComponentProps {
  className?: string;
  handleChange: (arg : any) => void;
}

export const SearchBarComponent = (props: SearchBarComponentProps) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={Theme} >
      <Box data-testid="searchBar" className={classes.boxElement}>
        <div>
          <IconComponent src={Search} />
        </div>
        <input data-testid="input"
          type="text"
          className={`${classes.inputBar} ${props.className}`}
          placeholder="Search by title or author"
          color={Theme.palette.text_color.placeholder}
          onChange={event=>props.handleChange(event)}
        />
      </Box>
    </ThemeProvider>
  );
};
