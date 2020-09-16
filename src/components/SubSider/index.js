import React from 'react';
import { Layout, Divider, Avatar, Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import GitHub from '../../assets/githubUrl.png';
import Jiaoliuqun from '../../assets/jiaoliuqun.png';

const { Sider, Content } = Layout;
const { Meta } = Card;

class SubSider extends React.Component {
	// constructor(props) {}

	render() {
		return (
			<div>
				<Layout>
					<Content></Content>
					<Sider
						width={400}
						style={{
							minHeight: document.documentElement.clientHeight - 64 - 70,
							marginTop: 64,
							backgroundColor: '#fff',
							// marginLeft: document.documentElement.clientWidth - 400,
						}}
					>
						<div>
							<div>
								<Divider>项目地址</Divider>
								<a href="https://github.com/MuxinFeng/yinluren-react">
									<Avatar
										style={{ marginLeft: 140 }}
										size={120}
										src={GitHub}
										alt="Github仓库地址"
									/>
								</a>
							</div>
						</div>
						<div>
							<Divider>热门点击</Divider>
							<Row gutter={16} style={{}}>
								<Col span={12}>
									<Card
										style={{
											width: 100,
											marginLeft: 'auto',
											marginRight: 'auto',
										}}
										hoverable
										cover={
											<img
												alt="Top1"
												src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
											/>
										}
									>
										<Meta title="Top1" />
									</Card>
								</Col>
								<Col span={12}>
									<Card
										style={{
											width: 100,
											marginLeft: 'auto',
											marginRight: 'auto',
										}}
										hoverable
										cover={
											<img
												alt="Top2"
												src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
											/>
										}
									>
										<Meta title="沈逸" />
									</Card>
								</Col>
							</Row>
							<Row gutter={16} style={{ marginTop: 10 }}>
								<Col span={12}>
									<Card
										style={{
											width: 100,
											marginLeft: 'auto',
											marginRight: 'auto',
										}}
										hoverable
										cover={
											<img
												alt="Top3"
												src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
											/>
										}
									>
										<Meta title="王德峰" />
									</Card>
								</Col>
								<Col span={12}>
									<Card
										style={{
											width: 100,
											marginLeft: 'auto',
											marginRight: 'auto',
										}}
										hoverable
										cover={
											<img
												alt="Top4"
												src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
											/>
										}
									>
										<Meta title="王乾慧" />
									</Card>
								</Col>
							</Row>
						</div>
						<div>
							<Divider>交流群</Divider>
							<img
								src={Jiaoliuqun}
								alt="交流群"
								style={{ marginLeft: 60, width: 280, height: 210 }}
							/>
							<Divider></Divider>
						</div>
					</Sider>
				</Layout>
			</div>
		);
	}
}

export default SubSider;
