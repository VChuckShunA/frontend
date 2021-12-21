import { Layout, Menu,Button,Modal,Input, Form, Table } from 'antd';
import  {useEffect,useState} from 'react';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import axios from 'axios';

const { SubMenu } = Menu;
const { Header, Footer,Content, Sider } = Layout;
export const LayoutPage = () =>{

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


const  [userInfo,setUserInfo]=useState();
  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(response=>{
      console.log(response.data);
      setUserInfo(response.data);
    }

    )
  }, [])

  const columns=[
    {
      title: 'First Name',
      dataIndex:'fname',
      key:'fname'
    },
    {
      title: 'Last Name',
      dataIndex:'lname',
      key:'lname'
    }
    ,{
      title: 'Email',
      dataIndex:'email',
      key:'email'
    }
    ,{
      title: 'EPF Number',
      dataIndex:'epfnumber',
      key:'epfnumber'
    }
    ,{
      title: 'Designation',
      dataIndex:'designation',
      key:'designation'
    }
  ]
return(
  <>
    <Layout>
      <Header>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
         labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 14,
        }}
        
        >
        <Form.Item
        label="First Name"
        name="fname"
        rules={[
          {
            required: true,
            message: "Please input the First name"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="First Name"
        name="lname"
        rules={[
          {
            required: true,
            message: "Please enter the Last name"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please inenterput the email"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="EPF Number"
        name="epfnumber"
        rules={[
          {
            required: true,
            message: "Please enter the EPF number"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Designation"
        name="designation"
        rules={[
          {
            required: true,
            message: "Please enter the designation"
          }
        ]}
      >
        <Input />
      </Form.Item>

        </Form>
      </Modal>
      </Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>

          <Table 
          dataSource={userInfo}
          columns={columns}></Table>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

   
  </>
)
  

}