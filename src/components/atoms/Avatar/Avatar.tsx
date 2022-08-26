import Avatar from "@mui/material/Avatar";

export interface AvatarComponentProps {
  letter?: string;
}

export const AvatarComponent = (props: AvatarComponentProps) => {
  return (
    <Avatar
      sx={{ bgcolor: "#69A6E3", color: "white", width: "44px", height: "44px" }}
    >
      {props.letter}
    </Avatar>
  );
};
