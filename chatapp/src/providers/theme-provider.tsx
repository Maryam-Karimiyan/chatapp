import { ConfigProvider } from "antd";
import { ReactNode } from "react";

function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // این تکه برای همه کامپوننت ها رنگ ها رو اعمال میکنه
          colorPrimary: "#31304D",
          borderRadius: 2,
        },
        // اینجا میخوام برای کامپوننت خاص مثلا فقط باتن ها استایل خاصی بدم
        components: {
          Button: {
            controlHeight: 45,
            boxShadow:"none",
            colorPrimaryHover:"#31304D",
            controlOutline:"none",
            colorBorder:"#31304D"
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default ThemeProvider;
