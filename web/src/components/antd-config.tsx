import { StyleProvider } from "@ant-design/cssinjs";
import { App, ConfigProvider } from "antd";
import type { PropsWithChildren } from "react";

export function AntdConfig({ children }: PropsWithChildren) {
  return (
    <StyleProvider layer>
      <ConfigProvider
        theme={{
          cssVar: {
            prefix: "ant",
            key: "_,:root,antd",
          },
          token: {
            colorPrimary: "#00b96b",
            // colorBgContainer: "#f6ffed",
            borderRadius: 2,
          },
          components: {
            Typography: {
              titleMarginBottom: 0,
              titleMarginTop: 0,
            },
            Form: {
              verticalLabelMargin: 0,
              verticalLabelPadding: 0,
            },
          },
        }}
      >
        <App>{children}</App>
      </ConfigProvider>
    </StyleProvider>
  );
}
