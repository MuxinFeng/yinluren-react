import React, { Component } from 'react';
import { Layout, Divider, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import GitHub from '../../assets/githubUrl.png';
import Jiaoliuqun from '../../assets/jiaoliuqun.png';

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
							backgroundColor: '#fff',
						}}
					>
						<div>
							<h2>第一篇文章</h2>
						</div>
					</Content>
				</Layout>
			</div>
		);
	}
}

export default Articles;
