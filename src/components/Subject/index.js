import React from 'react';
import { Layout, Divider, Avatar, Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import GitHub from '../../assets/githubUrl.png';
import Jiaoliuqun from '../../assets/jiaoliuqun.png';
import axios from 'axios';
// import store from '../../store/index';

const { Sider, Content, Footer } = Layout;
const { Meta } = Card;

class Subject extends React.Component {
	constructor(props) {
		super();
		// this.state = store.getState();
		this.state = {
			cardList: [],
			current: 'political',
		};
	}

	componentDidMount() {
		// console.log(this.state);
		const subjectBaseUrl =
			'https://www.easy-mock.com/mock/5f60c57aed072c1818dd712f/yinlurendb/subject/';
		const subjectName = this.state.current;
		const url = subjectBaseUrl + subjectName;
		axios
			.get(url)
			// .get(
			// 	'https://www.easy-mock.com/mock/5f60c57aed072c1818dd712f/yinlurendb/subject/political'
			// )
			.then((res) => {
				this.setState({
					cardList: res.data.data.cardList,
					current: this.props.history.location.state.currentObject,
				});
				console.log(res.data.data);
				console.log(this.props.history.location.state.currentObject);
				console.log(this.state.current);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	clickCard = (characterId) => {
		const a = '2';
		console.log(a + characterId);
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
										{this.state.cardList.map((item, index) => {
											return (
												<Col style={{ marginBottom: 15 }} span={6}>
													<Card
														style={{
															width: 150,
															marginLeft: 'auto',
															marginRight: 'auto',
														}}
														hoverable
														cover={<img alt="图片未显示" src={item.src} />}
														onClick={() => this.clickCard(item.characterId)}
													>
														<Meta
															title={item.title}
															style={{ textAlign: 'center' }}
														/>
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
