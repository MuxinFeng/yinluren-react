import React, { Component } from 'react';
import { Layout, Divider } from 'antd';
import { EyeOutlined, MessageOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import GitHub from '../../assets/githubUrl.png';
import './index.css';
// import Jiaoliuqun from '../../assets/jiaoliuqun.png';

const { Content } = Layout;

class Articles extends Component {
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
						{/* <Layout
							style={{
								backgroundColor: '#fff',
							}}
						>
							<Content>
								<Layout>
									<Content>
										<h2>第一篇文章</h2>
										<p>这是第一篇文章的简介</p>
									</Content>
									<Sider></Sider>
								</Layout>
							</Content>
							<Footer>
								<div>
									<span>20</span>
									<span>50</span>
									<span>2020.9.14 20:17</span>
									<Divider></Divider>
								</div>
							</Footer>
						</Layout> */}
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
									<h2>第一篇文章</h2>
								</Link>
								<p>这是第一篇文章的简介</p>
							</div>
							<div class="meta">
								{/* <Icon type="heart">50</Icon> */}
								<span>
									<EyeOutlined theme="outlined" />
									50
								</span>
								<span>
									<MessageOutlined theme="outlined" />
									16
								</span>
								<span>2020.9.14 21:24</span>
							</div>
							<Divider />
						</div>
					</Content>
				</Layout>
			</div>
		);
	}
}

export default Articles;
