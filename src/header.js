// import React,{useState} from 'react';
// import './header.css';
// import { Button,Radio, Space } from 'antd';
// import { Carousel } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, Divider} from 'antd';
// import { LaptopOutlined, CaretRightOutlined,ArrowDownOutlined,MailOutlined,PhoneOutlined,CalendarOutlined,ShoppingOutlined,UsergroupAddOutlined,MailTwoTone,PhoneTwoTone, CalendarTwoTone,SettingTwoTone,MessageTwoTone,NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme, MenuOutlined } from 'antd';
// const { Header, Content, Sider } = Layout;

function AppHeader() {
  return <div>asdf;lkj </div>;
}

// const contentStyle = {
//   height: '200px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
//   paddingTop:'50px',
// };
// const items1 = [
//     {key: 'nav1', label: 'Home'},
//     {key: 'nav2', label: 'Blogs', role:'button'},
//     {key: 'subnav1', label: 'Communities ', icon: <ArrowDownOutlined/>,
//     children: [{key:'subnav1_opt1', label:'Sports'},
//                {key:'subnav1_opt1', label:'Interests',icon:<CaretRightOutlined />}]
//               },
//     {key: 'nav4', label: 'Thank it forward'},
//     {key:'nav5',className:"find",label:<form className="d-flex" role="search">
//     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//     <button className="btn btn-outline-success" type="submit">Search</button>,
//   </form>},
//     {key: 'nav4', label: 'Thank it forward'},
// ];

// /* const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `Edit Profile`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });
//  */

// const items2 = [
//     {
//         key: 'subnav1', label: 'Profile', icon: <UserOutlined />,
//         children: [
//             {key: 'subnav1_opt1',className:"assign" ,label: 'Name',icon: <UserOutlined />},
//             {key: 'subnav1_opt2', label: 'date of Birth', icon: <CalendarOutlined />},
//             {key: 'subnav1_opt3', label: 'Designation', icon: <ShoppingOutlined />},
//             {key: 'subnav1_opt4', label: 'Team', icon: <UsergroupAddOutlined />},
//             {key: 'subnav1_opt5', label: 'Email', icon:<MailOutlined />},
//             {key: 'subnav1_opt6', label: 'Mobile Number', icon:<PhoneOutlined />},
//         ]
//     },
//     {key: 'subnav2', label: 'Messaging', icon: <MessageTwoTone />},
//     {key: 'subnav3', label: 'Settings', icon: <SettingTwoTone />},
// ];

// <div>
// <Radio defaultChecked={false} disabled={disabled}>
//         Disabled
//       </Radio>
//       <Radio defaultChecked disabled={disabled}>
//         Disabled
//       </Radio>
//       <br />
//       <Button
//         type="primary"
//         onClick={toggleDisabled}
//         style={{
//           marginTop: 16,
//         }}
//       >
//         Toggle disabled
//       </Button>
// </div>
// const items = [
//     {
//       key: '1',
//       label: (
//         <a target="_blank" rel="noopener noreferrer">
//           Question
//         </a>
//       ),
//     },
//     {
//       key: '2',
//       label: (
//         <a target="_blank" rel="noopener noreferrer">
//           Thought
//         </a>
//       ),
//     },
//   ];
// const AppHeader1 = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   //const [text, setText] = useState('');
//   return (
//     <Layout>
//       <Header className="header">
//         <div className="logo" />
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
//       </Header>
//       <Layout>
//         <Sider
//           width={200}
//           style={{
//             background: colorBgContainer,
//           }}
//         >
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             style={{
//               height: '100%',
//               borderRight: 0,
//             }}
//             items={items2}
//           />
//         </Sider>
//         <Layout
//           style={{
//             padding: '0 24px 24px',
//           }}
//         >
//           <Content
//             style={{
//               margin: '16px 0',
//               paddingLeft:'100px',
//               paddingTop:'40px',
//             }}
//           >
//         <div>
//         <Carousel autoplay>
//     <div>
//       <img src='https://i.postimg.cc/Bb8txv2h/Capture.png' style={contentStyle}/>
//     </div>
//     <div>
//       <img src='https://i.postimg.cc/Kv8hpWV2/20221019-153818.jpg' style={contentStyle}/>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel></div>
//         <h3>What's on your mind?</h3>
//         <Dropdown
// menu={{
//   items,
// }}
// dropdownRender={(menu) => (
//   <div className="dropdown-content">
//     {menu}
//     <Divider
//       style={{
//         margin: 0,
//         marginLeft:50,
//       }}
//     />
//     <Space
//       style={{
//         padding:8,
//       }}
//     >
//     </Space>
//   </div>
// )}
// >
// <a onClick={(e) => e.preventDefault()}>
//   <Space className='space'>
//     Select
//     <DownOutlined />
//   </Space>
// </a>
// </Dropdown>

//           </Content>
//           <Content>
//            <textarea className="form-control" id="myBox" rows="8"></textarea>
//             <div>
//             <Button type="primary" ghost className='pp'>Like</Button>
//             <Button type="primary" ghost className='pp'>Comment</Button>
//             <Button type="primary" ghost className='pp'>Share</Button>
//             <Button type="primary" ghost className='pp'>Post</Button>
//             <Button type="primary" ghost className='pp'>Repost</Button>
//             </div>
//           </Content>
//         </Layout>
//       </Layout>
//     </Layout>
//   );
// };
// }
export default AppHeader;
