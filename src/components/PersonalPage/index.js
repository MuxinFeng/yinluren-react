import './index.css';
import React from 'react';
import { Layout, Card, Col, Row, Divider, Anchor, Avatar } from 'antd';
import 'antd/dist/antd.css';
import {
	PlayCircleOutlined,
	VerticalAlignBottomOutlined,
} from '@ant-design/icons';
import axios from 'axios';

const { Sider, Content, Footer } = Layout;
const { Meta } = Card;
const { Link } = Anchor;

class PersonalPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			characterPicture: '',
			characterIntoduction: '',
			characterIntoductionByAuthor: '',
			videoList: [],
			bookList: [],
			watchUrlList: [],
			downloadUrlList: [],
		};
	}
	componentDidMount() {
		// const subjectBaseUrl =
		// 	'https://www.easy-mock.com/mock/5f60c57aed072c1818dd712f/yinlurendb/subject/';
		// const subjectName = this.state.current;
		// const url = subjectBaseUrl + subjectName;
		const url =
			'https://www.easy-mock.com/mock/5f60c57aed072c1818dd712f/yinlurendb/personalPage';
		axios
			.get(url)
			.then((res) => {
				this.setState({
					characterPicture: res.data.data.characterPicture,
					characterIntoduction: res.data.data.characterIntoduction,
					characterIntoductionByAuthor:
						res.data.data.characterIntoductionByAuthor,
					videoList: res.data.data.videoList,
					bookList: res.data.data.bookList,
				});
				console.log(res.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	watchVideo = (e) => {
		console.log(e);
		const videoBaseUrl =
			'https://www.easy-mock.com/mock/5f60c57aed072c1818dd712f/yinlurendb/video/';
		const videoId = e;
		const url = videoBaseUrl + videoId;
		axios.get(url).then((res) => {
			this.setState({
				watchUrlList: res.data.data.watchUrlList,
			});
			console.log(res.data.data);
			console.log(this.state.watchUrlList);
		});
	};

	downloadVideo = (e) => {
		console.log(e);
		console.log(e);
		const videoBaseUrl =
			'https://www.easy-mock.com/mock/5f60c57aed072c1818dd712f/yinlurendb/video/';
		const videoId = e;
		const url = videoBaseUrl + videoId;
		axios.get(url).then((res) => {
			this.setState({
				downloadUrlList: res.data.data.dowanloadUrlList,
			});
			console.log(res.data.data);
			console.log(this.state.downloadUrlList);
		});
	};

	render() {
		return (
			<div>
				<Layout>
					<Content>
						<Layout>
							<Sider
								width={400}
								style={{
									minHeight: document.documentElement.clientHeight - 64 - 70,
									marginTop: 64,
									backgroundColor: '#fff',
								}}
							>
								<div>
									<img
										src={this.state.characterPicture}
										alt="交流群"
										className="portrait"
									/>
								</div>
								<div>
									<Divider>个人简介</Divider>
									<div className="intruction">
										<p>{this.state.characterIntoduction}</p>
									</div>
									<Divider></Divider>
								</div>
							</Sider>
							<Content
								style={{
									minHeight: document.documentElement.clientHeight - 64 - 70,
									width: document.documentElement.clientHeight - 400 - 200,
									marginTop: 64,
									backgroundColor: '#fff',
								}}
							>
								<div>
									<Divider orientation="left" id="biography">
										人物志
									</Divider>
									<div className="intruction">
										<p>{this.state.characterIntoductionByAuthor}</p>
									</div>
								</div>
								<div>
									<Divider orientation="left" id="videos-series">
										系列视频资源
									</Divider>
									<div
										style={{
											paddingTop: 30,
											paddingRight: 100,
											paddingLeft: 100,
										}}
									>
										<Row gutter={16} style={{ marginBottom: 15 }}>
											{this.state.videoList.map((item, index) => {
												return (
													<Col span={6}>
														<Card
															style={{
																width: 250,
																marginLeft: 'auto',
																marginRight: 'auto',
															}}
															hoverable
															cover={
																<img alt="图片未显示" src={item.videoCover} />
															}
															actions={[
																<PlayCircleOutlined
																	key={item.videoId}
																	onClick={() => this.watchVideo(item.videoId)}
																/>,
																<VerticalAlignBottomOutlined
																	key={item.videoId}
																	onClick={() =>
																		this.downloadVideo(item.videoId)
																	}
																/>,
															]}
														>
															<Meta
																avatar={<Avatar src={item.videoAvatar} />}
																description={item.title}
															/>
														</Card>
													</Col>
												);
											})}
										</Row>
									</div>
								</div>
								<div>
									<Divider orientation="left" id="videos">
										讲座资源
									</Divider>
								</div>
								<div>
									<Divider orientation="left" id="articles">
										著作资源
									</Divider>
									<div
										style={{
											paddingTop: 30,
											paddingRight: 100,
											paddingLeft: 100,
										}}
									>
										<Row gutter={16} style={{ marginBottom: 15 }}>
											{this.state.bookList.map((item, index) => {
												return (
													<Col span={4}>
														<Card
															style={{
																width: 150,
																marginLeft: 'auto',
																marginRight: 'auto',
															}}
															hoverable
															cover={
																<img alt="图片未显示" src={item.bookCover} />
															}
															actions={[
																<VerticalAlignBottomOutlined key="download" />,
															]}
														>
															<Meta title={item.title} />
														</Card>
													</Col>
												);
											})}
										</Row>
									</div>
									<Divider></Divider>
								</div>
							</Content>
							<Sider
								width={200}
								style={{
									minHeight: document.documentElement.clientHeight - 64 - 70,
									marginTop: 64,
									backgroundColor: '#fff',
								}}
							>
								<Anchor style={{ marginTop: 150 }}>
									<Link href="#biography" title="人物志" />
									<Link href="#videos-series" title="系列视频资源" />
									<Link href="#videos" title="讲座资源" />
									<Link href="#articles" title="著作资源" />
								</Anchor>
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
export default PersonalPage;
