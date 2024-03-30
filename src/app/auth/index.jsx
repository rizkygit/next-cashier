"use client"
import { Button } from "antd"
import Link from "next/link";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import ModalRegister from "@/components/modal/ModalRegister";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <div className="w-480px rounded-2xl shadow-md bg-white overflow-hidden">
      <h1 className="p-10 font-bold text-3xl text-center">LOGIN</h1>
      <div className="p-10/50/20/50">
        <Form labelCol={{ span: 6, }} wrapperCol={{ span: 16, }} style={{ maxWidth: 600, }} initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined style={{ color: "#a1a1a1" }} />} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: "#a1a1a1" }} />}
            />
          </Form.Item>
          <div className="flex flex-wrap justify-center items-center mb-6 ">
            <Link href="/admin/dashboard" className="mx-4" passHref>
              <Button htmlType="submit">Login</Button>
            </Link>
            <span>or</span>
            <ModalRegister />
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;
