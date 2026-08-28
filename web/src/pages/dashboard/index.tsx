import { DashboardLayout } from "@/components/dashboard-layout";
import { LinkButton } from "@/components/link";
import { PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <div className="flex items-center justify-between">
          <Typography.Title level={4} className="">
            Apps
          </Typography.Title>
          <LinkButton to="/apps/create" icon={<PlusOutlined />}>
            New App
          </LinkButton>
        </div>
      </div>
    </DashboardLayout>
  );
}
