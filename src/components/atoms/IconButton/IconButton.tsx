import { IconButton } from "@mui/material";
export interface IconButtonComponentProps {
  children?: React.ReactNode;
  onclick?: () => void;
  disabled?: boolean;
}

export const IconButtonComponent = (props: IconButtonComponentProps) => {
  return (
    <IconButton onClick={props.onclick} disabled={props.disabled}>
      {props.children}
    </IconButton>
  );
};
