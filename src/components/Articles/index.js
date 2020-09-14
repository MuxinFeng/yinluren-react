import React, { Component } from 'react';
import { Layout, Divider } from 'antd';
import {
	// MacCommandOutlined,
	BankOutlined,
	DatabaseFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import GitHub from '../../assets/githubUrl.png';
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
						<li>
							<a href="http://baidu.com">
								<img src={{ GitHub }} alt="文章封面"></img>
							</a>
							<div class="content">
								<Link to="http://baidu.com">第一篇文章</Link>
								<p>这是第一篇文章的简介</p>
							</div>
							<div class="meta">
								{/* <Icon type="heart">50</Icon> */}
								<span>
									<DatabaseFilled theme="outlined" />
									50
								</span>

								<BankOutlined theme="outlined">20</BankOutlined>
								<DatabaseFilled theme="outlined">
									2020.9.14 21:24
								</DatabaseFilled>
							</div>
							<Divider />
						</li>
					</Content>
				</Layout>
			</div>
		);
	}
}

export default Articles;
