import Avatar from "@mui/material/Avatar";

export interface AvatarComponentProps {
  letter?: string;
}

const AvatarSx = {
  bgcolor: "#69A6E3",
  color: "white",
  width: "44px",
  height: "44px",
};
export const AvatarComponent = (props: AvatarComponentProps) => {
  return (
    <Avatar data-testid="Avatar" sx={AvatarSx}>
      {props.letter}
    </Avatar>
  );
};
