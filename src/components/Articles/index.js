import React, { Component } from 'react';
import { Layout, Divider, Avatar, Col, Row, Card } from 'antd';
import { EyeOutlined, MessageOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import GitHub from '../../assets/githubUrl.png';
import './index.css';
// import SubSider from '../SubSider';
// import Sider from 'antd/lib/layout/Sider';
import Jiaoliuqun from '../../assets/jiaoliuqun.png';
import axios from 'axios';

const { Content, Sider } = Layout;
const { Meta } = Card;

class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 'communication',
			articlsList: [],
		};
	}
	componentDidMount() {
		// console.log(this.state);
		const subjectBaseUrl =
			'https://www.easy-mock.com/mock/5f60c57aed072c1818dd712f/yinlurendb/';
		const subjectName = this.state.current;
		const url = subjectBaseUrl + subjectName;
		axios
			.get(url)
			// .get(
			// 	'https://www.easy-mock.com/mock/5f60c57aed072c1818dd712f/yinlurendb/subject/political'
			// )
			.then((res) => {
				this.setState({
					articleList: res.data.data.articleList,
					current: this.props.history.location.state.currentObject,
				});
				console.log(res.data.data.articleList);
				console.log(this.props.history.location.state.currentObject);
				console.log(this.state.current);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<div>
				<Layout>
					<Content
						style={{
							minHeight: document.documentElement.clientHeight - 64 - 70,
							width: document.documentElement.clientWidth - 400,
							marginTop: 64,
							paddingTop: 30,
							paddingRight: 100,
							paddingLeft: 400,
							backgroundColor: '#fff',
						}}
					>
						<div>
							{(this.state.articleList || []).map((item, index) => {
								return (
									<div>
										<a href="http://baidu.com">
											<img
												className="articlePicture"
												src={item.src}
												alt="文章封面"
											></img>
										</a>
										<div class="content">
											<Link to="http://baidu.com">
												<h3>{item.title}</h3>
											</Link>
											<p>{item.introduction}</p>
										</div>
										<div class="meta">
											<span>
												<EyeOutlined className="spanIcon" theme="outlined" />
												<span>{item.views}</span>
											</span>
											<span>
												<MessageOutlined
													className="spanIcon"
													theme="outlined"
												/>
												<span>{item.likes}</span>
											</span>
											<span className="spanTime">{item.time}</span>
										</div>
										<Divider />
									</div>
								);
							})}
							<div>
								<a href="http://baidu.com">
									<img
										className="articlePicture"
										src={GitHub}
										alt="文章封面"
									></img>
								</a>
								<div class="content">
									<Link to="http://baidu.com">
										<h3>第一篇文章</h3>
									</Link>
									<p>这是第一篇文章的简介</p>
								</div>
								<div class="meta">
									<span>
										<EyeOutlined className="spanIcon" theme="outlined" />
										<span>50</span>
									</span>
									<span>
										<MessageOutlined className="spanIcon" theme="outlined" />
										<span>16</span>
									</span>
									<span className="spanTime">2020.9.14</span>
								</div>
								<Divider />
							</div>
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
					{/* <Footer>123</Footer> */}
				</Layout>
			</div>
		);
	}
}

export default Articles;
