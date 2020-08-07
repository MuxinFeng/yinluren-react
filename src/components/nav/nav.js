import React from 'react';
import { Layout, Menu, Input, Row, Col, } from 'antd';
import { MacCommandOutlined, BankOutlined, DollarOutlined, MessageOutlined, KeyOutlined, RadarChartOutlined, HeartOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;

class Nav extends React.Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
    render() {
        const { current } = this.state;
        return (
            
            <Layout>
                <Header style={{
                    position: 'fixed',
                    // zIndex: 1,
                    top: 0,
                    width: '100%',
                    // minWidth: '1200px',
                    height: '80px',
                    float: 'left',
                    backgroundColor: 'white',
                    borderBottom: '1px solid #eee',
                }} >
                    <Row className="container">
                        <Col style={{ display: 'inline-block', width: '25%', float: 'left', marginTop: "20px", fontFamily: "KaiTi", fontSize: "26px", }}>
                            跬步不休,跛鳖千里;累土不辍,丘山崇成
                        </Col>
                        <Col style={{ width: '50%', float: 'left', display: 'inline-block' }}>
                            <Menu mode="horizontal" theme="dark" onClick={this.handleClick} selectedKeys={[current]}>
                                <Menu.Item style={{ display: 'inline-block', float: "left", padding: "10px 20px" }} key="1" icon={<BankOutlined style={{ paddingRight: "4px", }} />}>
                                    政治
                                </Menu.Item>
                                <Menu.Item style={{ display: 'inline-block', float: "left", padding: "10px 20px" }} key="2" icon={<KeyOutlined style={{ paddingRight: "4px", }}/>}>
                                    历史
                                </Menu.Item>
                                <Menu.Item style={{ display: 'inline-block', float: "left", padding: "10px 20px" }} key="3" icon={<DollarOutlined style={{ paddingRight: "4px", }}/>}>
                                    经济
                                </Menu.Item>
                                <Menu.Item style={{ display: 'inline-block', float: "left", padding: "10px 20px" }} key="4" icon={<RadarChartOutlined style={{ paddingRight: "4px", }}/>}>
                                    哲学
                                </Menu.Item>
                                <Menu.Item style={{ display: 'inline-block', float: "left", padding: "10px 20px" }} key="5" icon={<HeartOutlined style={{ paddingRight: "4px", }}/>}>
                                    国学
                                </Menu.Item>
                                <Menu.Item style={{ display: 'inline-block', float: "left", padding: "10px 20px" }} key="6" icon={<MacCommandOutlined style={{ paddingRight: "4px", }}/>}>
                                    杂家
                                </Menu.Item>
                                <Menu.Item style={{ display: 'inline-block', float: "left", padding: "10px 20px" }} key="7" icon={<MessageOutlined style={{ paddingRight: "4px", }}/>}>
                                    跬步者言
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col style={{ width: '25%', float: 'left', display: 'inline-block' }}>
                            <div>
                                <Search placeholder="搜索" />
                            </div>
                        </Col>
                    </Row>
                </Header>
            </Layout>
        );
    }
}

export default Nav;