import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Form, Input, Button, Checkbox, message,
} from 'antd';

const SignInPage = () => {
  console.log('In SignIn page');
  const history = useHistory();
  // const dispatch = useDispatch();

  const mandatoryMessage = 'This field is mandatory.';

  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('this is a success message');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('this is an error');
  };

  return (
    <div className="page">
      <p>Sign In</p>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: mandatoryMessage }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: mandatoryMessage }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p>
        Not a user yet?
        <Link to="/sign_up"> Create your account</Link>
      </p>
    </div>
  );
};

export default SignInPage;
