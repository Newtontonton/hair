import React from 'react';
import {Card,Form,Input,Checkbox,Button,message} from 'antd';
import logo from '@/assets/logo1.png';
import './index.scss';
import { useStore } from '@/store';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const {loginStore} = useStore();
  const navigate = useNavigate();
  async function onFinish(values) {
    console.log(values);
    const {mobile,code} = values;
    //await之后可以trycatch 包裹
    console.log(mobile,code);
    try {
      await loginStore.getToken({mobile,code});
      navigate('/',{replace:true});
      message.success('登录成功')
    } catch (error) {
      message.error('登录失败',error)
    }
    
  }

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form 
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          initialValues={{
            remember: true,
            mobile:'',
            code:''
          }}
        >
          <Form.Item
            label="手机号"
            name="mobile"
            rules={[
              { required: true, message: '请输入手机号' },
              {pattern: /^1[3-9]\d{9}$/,
              message: '手机号码格式不对',
              validateTrigger: 'onBlur'}
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="code"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password size="large" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>

          <Form.Item>
            {/* <!-- 渲染Button组件为submit按钮 --> */}
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
