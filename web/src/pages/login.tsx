import { App, Button, Card, Form, Input, Layout } from "antd";
import { useNavigate } from "react-router";

export function LoginPage() {
  const { message } = App.useApp();
  const navigate = useNavigate();

  const submit = (values: any) => {
    console.log(values);
    message.success("Login successful");
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <Layout>
      <Layout.Content>
        <div className="flex items-center justify-center h-screen">
          <Card title="Paneli Login" style={{ width: "100%", maxWidth: 400 }}>
            <Form layout="vertical" size="large" onFinish={submit}>
              <Form.Item label="Email Address" name="email">
                <Input placeholder="Enter email address" />
              </Form.Item>
              <Form.Item label="Password" name="email">
                <Input.Password placeholder="Enter password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="w-full" htmlType="submit">
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Layout.Content>
    </Layout>
  );
}
