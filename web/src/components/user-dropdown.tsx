import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, type MenuProps } from "antd";
import { Link, useNavigate } from "react-router";

export function UserDropdown() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link to="#">Profile Settings</Link>,
    },
    {
      key: "2",
      icon: <SettingOutlined />,
      label: <Link to="#">Panel Settings</Link>,
    },
    {
      key: "4",
      danger: true,
      icon: <LogoutOutlined />,
      onClick: logout,
      label: "Sign Out",
    },
  ];

  return (
    <Dropdown trigger={["click"]} menu={{ items }}>
      <Button
        shape="circle"
        size="large"
        icon={
          <Avatar>
            <span>US</span>
          </Avatar>
        }
      />
    </Dropdown>
  );
}
