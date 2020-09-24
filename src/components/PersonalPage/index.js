import './index.css';
import React from 'react';
import { Layout, Card, Col, Row, Divider, Anchor, Avatar } from 'antd';
import 'antd/dist/antd.css';
// import Nav from "../Nav/index";
import {
	PlayCircleOutlined,
	VerticalAlignBottomOutlined,
} from '@ant-design/icons';
import GitHub from '../../assets/githubUrl.png';
// import Jiaoliuqun from '../../assets/jiaoliuqun.png';

const { Sider, Content, Footer } = Layout;
const { Meta } = Card;
const { Link } = Anchor;

class PersonalPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			characterPicture: GitHub,
			characterIntoduction:
				'温铁军，汉族，祖籍河北昌黎，1951年5月出生于北京，三农问题专家。中国人民大学二级岗位教授，中国人民大学农业与农村发展学院院长，乡村建设中心、可持续发展高等研究院、农村金融研究所等校属科研机构负责人，校学术委员会副主任，中国人民大学国家发展与战略研究院研究员；西南大学中国乡村建设学院执行院长；福建农林大学新农村发展研究院、海峡乡村建设学院执行院长；北京大学习近平新时代中国特色社会主义思想研究院乡村振兴中心主任；浙江财经大学中国乡村振兴研究院名誉院长；复旦大学社会科学高等研究院当代中国研究中心特聘研究员；中国邮政储蓄银行独立非执行董事。',
			characterIntoductionByAuthor:
				'温铁军，汉族，祖籍河北昌黎，1951年5月出生于北京，三农问题专家。中国人民大学二级岗位教授，中国人民大学农业与农村发展学院院长，乡村建设中心、可持续发展高等研究院、农村金融研究所等校属科研机构负责人，校学术委员会副主任，中国人民大学国家发展与战略研究院研究员；西南大学中国乡村建设学院执行院长；福建农林大学新农村发展研究院、海峡乡村建设学院执行院长；北京大学习近平新时代中国特色社会主义思想研究院乡村振兴中心主任；浙江财经大学中国乡村振兴研究院名誉院长；复旦大学社会科学高等研究院当代中国研究中心特聘研究员；中国邮政储蓄银行独立非执行董事。',
			videoList: [
				{
					videoId: '',
					title: '2018年复旦人文讲堂红楼梦专题',
					videoCover: GitHub,
					videoAvatar:
						'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				},
			],
			bookList: [
				{
					bookId: '',
					title: '八次危机',
					bookCover:
						'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
				},
			],
		};
	}
	render() {
		return (
			<div>
				{/* <Nav></Nav> */}
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
																<PlayCircleOutlined key="view" />,
																<VerticalAlignBottomOutlined key="download" />,
															]}
														>
															<Meta
																// style={{ height: '84px' }}
																avatar={<Avatar src={item.videoAvatar} />}
																// description="2018年岳阳红楼梦讲读全集2018讲读全集"
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
