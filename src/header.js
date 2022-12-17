import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './header.css';
import { Button,Radio, Space,Switch,TreeSelect } from 'antd';
import { Carousel } from 'antd';
import { DownOutlined,SmileOutlined } from '@ant-design/icons';
import { Dropdown, Divider} from 'antd';
import { LaptopOutlined, CaretRightOutlined,ArrowDownOutlined,MailOutlined,PhoneOutlined,CalendarOutlined,ShoppingOutlined,UsergroupAddOutlined,MailTwoTone,PhoneTwoTone, CalendarTwoTone,SettingTwoTone,MessageTwoTone,NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, MenuOutlined } from 'antd';
//import background from "./downloads/flash.jpg";
const { Header, Content, Sider } = Layout;

// function App() {
//   const navigate = useNavigate();
// const navigateBlogs = () => {
//   // 👇️ navigate to /
//   navigate('https://www.wix.com/mystunningwebsites/blog?utm_source=affiliate&utm_medium=paid_referral&utm_campaign=af_41@www.guru99.com/&experiment_id=cake_123062366^417');
// };}
function App(){
  const navigate = useNavigate();
const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '150px',
  textAlign: 'center',
  background: '#F5F4F4',
  paddingTop:'30px',
  width:'70%',
  //paddingLeft:'70px',
};
<div style={{ backgroundImage: `url(https://images5.alphacoders.com/840/840870.jpg)` }}>
      Hello World
    </div>



 const items1= [
  {key:'nav6',className:"find",label:<form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-outline-success" type="submit">Search</button>
</form>},
    {key: 'nav1', label: 'Home'},
    {key: 'nav2', label: <button onClick={() => {navigate("/");}}> Blogs</button>},
    {key: 'subnav1', label: 'Communities ', icon : <ArrowDownOutlined/>,
    children: [{key:'Hobbies', label:'Hobbies',children : [{key:'Reading',label:'Reading', children:[{key:'club 1',label:'Reading club 1'},{key:'club 2',label:'Reading club 2'}]},{key:'Sports',label:"Sports", children: [{key:'Cricket',label:'Cricket'},{key:'Football',label:'Football'}]}]},
               {key:'Interests', label:'Interests',children:[{key:'Gaming',label:'Gaming'},{key:'Photography',label:'Photography'},{key:'Painting',label:'Painting'}]},
               {key:'Barter', label:'Barter',children:[{key:'Books',label:'Books'},{key:'Furniture',label:'Furniture'},{key:'Gadgets',label:'Gadgets'}]},
               {key:'Commute', label:'Commute',children:[{key:'Car Pool',label:'Car Pool'}]}]
    },
    //{key: 'nav5', label: 'Discussion Forum', role: 'button'},
    {key:'nav4',label:"Knowledge Management"},
    {key:'nav5',label:"THANK IT FORWARD"},
   // {key: 'nav4', label: 'Thank it forward'},
];

/* const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `Edit Profile`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
 */

const items2 = [
    {
        key: 'subnav1', label: 'Profile', icon: <UserOutlined />,
        children: [
            {key: 'subnav1_opt1',label: 'Eesha Jahnavi',icon: <UserOutlined />},
            {key: 'subnav1_opt2', label: '1/2/2001', icon: <CalendarOutlined />},
            {key: 'subnav1_opt3', label: 'AMTS', icon: <ShoppingOutlined />},
            {key: 'subnav1_opt4', label: 'High Tech', icon: <UsergroupAddOutlined />},
            {key: 'subnav1_opt5', label: 'ejahnavi@gmail.com', icon:<MailOutlined />},
            {key: 'subnav1_opt6', label: '9999999999', icon:<PhoneOutlined />},
        ]
    },
    {key: 'subnav2', label: 'Messaging', icon: <MessageTwoTone />},
    {key: 'subnav3', label: 'Settings', icon: <SettingTwoTone />},
];

<div>
<Radio defaultChecked={false} >
        Disabled
      </Radio>
      <Radio defaultChecked >
        Disabled
      </Radio>
      <br />
      <Button
        type="primary"
        style={{
          marginTop: 16,
        }}
      >
        Toggle disabled
      </Button>
</div>
const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Question
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Thought
        </a>
      ),
    },
  ];

const AppHeader1 = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //const [text, setText] = useState('');
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              margin: '16px 0',
              paddingLeft:'100px',
              paddingTop:'40px',
              width:'100%',
              //backgroundColor:'black',
            }}
          >
            
        <div>
        <Carousel autoplay>
    <div>
      <img src='https://mms.businesswire.com/media/20210615005366/en/884798/23/Logo_NoTagline_hiRes_JPG_%281%29.jpg' className='images' style={contentStyle}/>
    </div>
    <div>
      <img src='https://i.postimg.cc/Bb8txv2h/Capture.png' className='images' style={contentStyle}/>
    </div>
    <div>
    <img src='https://img.freepik.com/free-vector/merry-christmas-festival-christmas-balls-red-color-banner-vector_1055-11339.jpg?w=1380&t=st=1670862707~exp=1670863307~hmac=7b1748bec682334294f0374c1f0558ca8251eef2d812c11b1b138c45ecdf0494' className='images' style={contentStyle}/>
    </div>
    <div>
      <img src='https://i.postimg.cc/nV7BcFgG/new.jpg' className='images' style={contentStyle}/>
    </div>
  </Carousel></div>
        <h3>What's on your mind?</h3>
        {/* <Dropdown
menu={{
  items,
}}
dropdownRender={(menu) => (
  <div className="dropdown-content">
    {menu}
    <Divider
      style={{
        margin: 0,
        marginLeft:50,
      }}
    />
    <Space
      style={{
        padding:8,
      }}
    >
    </Space>
  </div>
)}
>
<a onClick={(e) => e.preventDefault()}>
  <Space className='space'>
    Select
    <DownOutlined />
  </Space>
</a>
</Dropdown> */}

<Space direction="vertical">
      <Switch
        checkedChildren="Question"
        unCheckedChildren="Thought"
        //checked={treeLine}
        //onChange={() => setTreeLine(!treeLine)}
      />
    </Space>
          </Content>
          
          <Content>
           <textarea className="form-control" id="myBox" rows="8"></textarea>
            <div>
            <button className="btn btn-outline-success" type="submit">Like</button>
            <button className="btn btn-outline-success" type="submit">Comment</button>
            <button className="btn btn-outline-success" type="submit">Share</button>
            <button className="btn btn-outline-success" type="submit">Post</button>
            <button className="btn btn-outline-success" type="submit">Repost</button>
            </div>
          </Content>
        </Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
      </Layout>
    </Layout>
  );
};
}

export default App;