import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Paragraph, Title } = Typography;

const ResetPassword = () => {
  const { t } = useTranslation();

  const onFinish = (values: unknown) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row align={"middle"} justify={"center"} style={{ height: "100%" }}>
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Row
          style={{
            flexDirection: "column",
            justifyItems: "flex-start",
            width: "100%",
          }}
        >
          <Title
            style={{
              marginBottom: 0,
              marginTop: "2%",
              userSelect: "none",
            }}
            level={3}
          >
            {t("Forgot password")}
          </Title>
          <Paragraph style={{ marginTop: "2%", userSelect: "none" }}>
            {t("You can reset your password")}
          </Paragraph>
        </Row>

        <Row
          style={{ justifyContent: "center", marginTop: "3%", width: "100%" }}
        >
          <Form
            name="resetPassword"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              width: "100%",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={t("Enter your email")}
              name="email"
              rules={[
                {
                  required: true,
                  message: `${t("Please input a email")}`,
                },
                {
                  type: "email",
                  message: `${t("Please input a valid email")}`,
                },
              ]}
            >
              <Input placeholder="email@smtp.com" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 6,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop: "30%" }}
              >
                {t("Send my password")}
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Col>
    </Row>
  );
};

export default ResetPassword;
