import React from 'react';
import { Layout, Divider, Avatar, Card, Col, Row, } from 'antd';
import 'antd/dist/antd.css';
import Nav from '../nav/nav';
import GitHub from '../../assets/githubUrl.png';
import Jiaoliuqun from '../../assets/jiaoliuqun.png';

const { Sider, Content, Footer } = Layout;
const { Meta } = Card;


class Subject extends React.Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Layout >
                    <Content >
                        <Layout>
                            <Content style={{ minHeight: document.documentElement.clientHeight - 64 - 70, marginTop: 64, backgroundColor: "#fff" }}>
                                <div style={{ paddingTop: 30, paddingRight: 100, paddingLeft: 450 }}>
                                    <Row gutter={16} style={{ marginBottom: 15 }}>
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
                                        <Col span={6}>
                                            <Card style={{ width: 150, marginLeft: "auto", marginRight: "auto" }} hoverable cover={<img alt="图片未显示" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                                <Meta title="Top1" />
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row gutter={16} style={{ marginBottom: 15 }}>
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
                                        <Col span={6}>
                                            <Card style={{ width: 150, marginLeft: "auto", marginRight: "auto" }} hoverable cover={<img alt="图片未显示" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                                <Meta title="Top1" />
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row gutter={16} style={{ marginBottom: 15 }}>
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
                                        <Col span={6}>
                                            <Card style={{ width: 150, marginLeft: "auto", marginRight: "auto" }} hoverable cover={<img alt="图片未显示" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                                <Meta title="Top1" />
                                            </Card>
                                        </Col>
                                    </Row>

                                </div>
                            </Content>
                            <Sider width={400} style={{ right: 20, minHeight: document.documentElement.clientHeight - 64 - 70, marginTop: 64, backgroundColor: "#fff" }}>
                                <div>
                                    <div>
                                        <Divider>项目地址</Divider>
                                        <a href="https://github.com/MuxinFeng/yinluren-react">
                                            <Avatar size={120} src={GitHub} alt="Github仓库地址" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <Divider>热门点击</Divider>
                                    <Row gutter={16} style={{}}>
                                        <Col span={12}>
                                            <Card style={{ width: 100, marginLeft: "auto", marginRight: "auto" }} hoverable cover={<img alt="Top1" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                                <Meta title="Top1" />
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card style={{ width: 100, marginLeft: "auto", marginRight: "auto" }} hoverable cover={<img alt="Top2" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                                <Meta title="沈逸" />
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row gutter={16} style={{ marginTop: 10 }}>
                                        <Col span={12}>
                                            <Card style={{ width: 100, marginLeft: "auto", marginRight: "auto" }} hoverable cover={<img alt="Top3" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                                <Meta title="王德峰" />
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card style={{ width: 100, marginLeft: "auto", marginRight: "auto" }} hoverable cover={<img alt="Top4" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                                <Meta title="王乾慧" />
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Divider>交流群</Divider>
                                    <img src={Jiaoliuqun} alt="交流群" style={{ width: 280, height: 210 }} />
                                    <Divider></Divider>
                                </div>
                            </Sider>
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
export default Subject;