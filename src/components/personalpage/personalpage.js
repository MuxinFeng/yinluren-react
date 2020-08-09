import React from 'react';
import { Layout, Card, Col, Row, Divider, } from 'antd';
import 'antd/dist/antd.css';
import Nav from '../nav/nav';
import {  SettingOutlined } from '@ant-design/icons';
// import GitHub from '../../assets/githubUrl.png';
// import Jiaoliuqun from '../../assets/jiaoliuqun.png';

const { Sider, Content, Footer } = Layout;
const { Meta } = Card;


class Personalpage extends React.Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Layout >
                    <Content >
                        <Layout>
                            <Sider width={400} style={{ left: 20, minHeight: document.documentElement.clientHeight - 64 - 70, marginTop: 64, backgroundColor: "#fff" }}>
                                <div>
                                    <Divider></Divider>
                                </div>
                                <div>
                                    <Divider>gerenjianjie</Divider>
                                    <Divider></Divider>
                                </div>
                            </Sider>
                            <Content style={{ minHeight: document.documentElement.clientHeight - 64 - 70, marginTop: 64, backgroundColor: "#fff" }}>
                                <div>
                                    <Divider orientation="left">人物志</Divider>
                                </div>
                                <div>
                                    <Divider orientation="left">系列视频资源</Divider>
                                </div>
                                <div>
                                    <Divider orientation="left">讲座资源</Divider>
                                </div>
                                <div>
                                    <Divider orientation="left">著作资源</Divider>
                                    <Divider></Divider>
                                </div>
                                <div style={{ paddingTop: 30, paddingRight: 100, paddingLeft: 450 }}>
                                    <Row gutter={16} style={{ marginBottom: 15 }}>
                                        <Col span={6}>
                                            <Card style={{ width: 150, marginLeft: "auto", marginRight: "auto" }} hoverable cover={<img alt="图片未显示" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}actions={[<SettingOutlined key="setting" />]}>
                                                <Meta title="Top1" />
                                            </Card>
                                        </Col>
                                        <Col span={6}>
                                            <Card style={{ width: 150, marginLeft: "auto", marginRight: "auto" }} hoverable cover={<img alt="图片未显示" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                                <Meta title="Top1" />
                                            </Card>
                                        </Col>
                                        <Col span={6}>
                                            <Card style={{ width: 150, marginLeft: "auto", marginRight: "auto" }} hoverable cover={<img alt="图片未显示" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                                <Meta title="Top1" />
                                            </Card>
                                        </Col>
                                        <Col span={6}>
                                            <Card style={{ width: 150, marginLeft: "auto", marginRight: "auto" }} hoverable cover={<img alt="图片未显示" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                                <Meta title="Top1" />
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Content>    
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center', backgroundColor: "#fff", height: 70 }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        )
    }
}
export default Personalpage;