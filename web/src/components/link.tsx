import { Button, type ButtonProps } from "antd";
import { useNavigate, type LinkProps } from "react-router";

export function LinkButton({
  to,
  ...props
}: ButtonProps & { to: LinkProps["to"] }) {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(to)} {...props} />;
}
