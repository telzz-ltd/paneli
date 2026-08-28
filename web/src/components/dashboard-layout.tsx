import { DashboardOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, Space, Typography } from "antd";
import React, { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router";
import { UserDropdown } from "./user-dropdown";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <Link to={key}>{label}</Link>,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "/dashboard", <DashboardOutlined />),
];

export interface DashboardLayoutProps {
  children?: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const currentYear = new Date().getFullYear();

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="p-4">
          <Typography.Title level={3} className="text-primary">
            Paneli
          </Typography.Title>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header className="p-0 bg-white flex items-center px-4 gap-4">
          <Typography.Title level={4}>Welcome back, Usman</Typography.Title>
          <Space className="ml-auto">
            <UserDropdown />
          </Space>
        </Header>
        <Content className="mx-4">
          {/* <Breadcrumb
            className="my-4"
            items={[{ title: "User" }, { title: "Bill" }]}
          /> */}
          <div className="py-4">{children}</div>
        </Content>
        <Footer className="text-center">
          Ant Design ©{currentYear} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
