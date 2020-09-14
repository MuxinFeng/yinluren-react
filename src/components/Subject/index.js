import React from 'react';
import { Layout, Divider, Avatar, Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import GitHub from '../../assets/githubUrl.png';
import Jiaoliuqun from '../../assets/jiaoliuqun.png';

const { Sider, Content, Footer } = Layout;
const { Meta } = Card;
const cardList = [
	{
		src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		title: '标题1',
	},
	{
		src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		title: '标题2',
	},
	{
		src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		title: '标题3',
	},
	{
		src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		title: '标题4',
	},
	{
		src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		title: '标题4',
	},
];

class Subject extends React.Component {
	clickCard = () => {
		console.log('1');
	};
	render() {
		return (
			<div>
				<Layout>
					<Content>
						<Layout>
							<Content
								style={{
									minHeight: document.documentElement.clientHeight - 64 - 70,
									width: document.documentElement.clientWidth - 400,
									marginTop: 64,
									backgroundColor: '#fff',
								}}
							>
								<div
									style={{
										paddingTop: 30,
										paddingRight: 100,
										paddingLeft: 400,
									}}
								>
									<Row gutter={16}>
										{cardList.map((item, index) => {
											return (
												<Col style={{ marginBottom: 15 }} span={6}>
													<Card
														onClick={this.clickCard()}
														style={{
															width: 150,
															marginLeft: 'auto',
															marginRight: 'auto',
														}}
														hoverable
														cover={<img alt="图片未显示" src={item.src} />}
													>
														<Meta title={item.title} />
													</Card>
												</Col>
											);
										})}
									</Row>
								</div>
							</Content>
							<Sider
								width={400}
								style={{
									minHeight: document.documentElement.clientHeight - 64 - 70,
									marginTop: 64,
									backgroundColor: '#fff',
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
					</Content>
					<Footer
						style={{ textAlign: 'center', backgroundColor: '#fff', height: 70 }}
					>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</div>
		);
	}
}
export default Subject;
