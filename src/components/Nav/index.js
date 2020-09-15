import React from 'react';
import { Layout, Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {
	MacCommandOutlined,
	BankOutlined,
	DollarOutlined,
	MessageOutlined,
	KeyOutlined,
	RadarChartOutlined,
	HeartOutlined,
} from '@ant-design/icons';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Subject from '../Subject/index.js';
import PersonalPage from '../PersonalPage/index';
import { SWITCH_MENUS } from '../../store/actionTypes'; //引入actiontypes
import store from '../../store/index';
import Articles from '../Articles/index.js';

const { Header, Content } = Layout;
const { Search } = Input;
const history = createBrowserHistory({
	forceRefresh: true,
});

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		store.subscribe(() => {
			const state = store.getState();
			this.saveState(state);
		});
		console.log(this.props);
	}

	saveState(state) {
		try {
			const serializedState = JSON.stringify(state);
			localStorage.setItem('state', serializedState);
		} catch (err) {
			console.log('state本地存储失败');
		}
	}

	handleClick = (e) => {
		console.log('click ', e);
		const action = {
			type: SWITCH_MENUS,
			value: e.key,
		};
		store.dispatch(action);
		const path = '/' + e.key;
		history.push({
			pathname: path,
			state: {
				currentObject: e.key,
			},
		});
	};

	render() {
		const { current } = this.state;
		return (
			<Layout>
				<Header
					style={{
						position: 'fixed',
						zIndex: 1,
						top: 0,
						width: '100%',
						// minWidth: '1200px',
						height: '64px',
						float: 'left',
						backgroundColor: 'white',
						borderBottom: '1px solid #eee',
					}}
				>
					<Row className="container">
						<Col
							style={{
								display: 'inline-block',
								width: '20%',
								float: 'left',
								marginBottom: '10px',
								paddingRight: '80px',
								fontFamily: 'KaiTi',
								fontSize: '26px',
							}}
						>
							跬步不休 累土不辍
						</Col>
						<Col
							style={{ width: '60%', float: 'left', display: 'inline-block' }}
						>
							<Menu
								mode="horizontal"
								onClick={this.handleClick}
								selectedKeys={[current]}
							>
								<Menu.Item
									style={{
										display: 'inline-block',
										float: 'left',
										padding: '0px 15px',
									}}
									key="political"
									icon={<BankOutlined style={{ paddingRight: '4px' }} />}
								>
									政治
								</Menu.Item>
								<Menu.Item
									style={{
										display: 'inline-block',
										float: 'left',
										padding: '0px 15px',
									}}
									key="history"
									icon={<KeyOutlined style={{ paddingRight: '4px' }} />}
								>
									历史
								</Menu.Item>
								<Menu.Item
									style={{
										display: 'inline-block',
										float: 'left',
										padding: '0px 15px',
									}}
									key="economic"
									icon={<DollarOutlined style={{ paddingRight: '4px' }} />}
								>
									经济
								</Menu.Item>
								<Menu.Item
									style={{
										display: 'inline-block',
										float: 'left',
										padding: '0px 15px',
									}}
									key="philosophy"
									icon={<RadarChartOutlined style={{ paddingRight: '4px' }} />}
								>
									哲学
								</Menu.Item>
								<Menu.Item
									style={{
										display: 'inline-block',
										float: 'left',
										padding: '0px 15px',
									}}
									key="guoxue"
									icon={<HeartOutlined style={{ paddingRight: '4px' }} />}
								>
									国学
								</Menu.Item>
								<Menu.Item
									style={{
										display: 'inline-block',
										float: 'left',
										padding: '0px 15px',
									}}
									key="zajia"
									icon={<MacCommandOutlined style={{ paddingRight: '4px' }} />}
								>
									杂家
								</Menu.Item>
								<Menu.Item
									style={{
										display: 'inline-block',
										float: 'left',
										padding: '0px 0px 0px 5px',
									}}
									key="communication"
									icon={<MessageOutlined style={{ paddingRight: '4px' }} />}
								>
									跬步者言
								</Menu.Item>
							</Menu>
						</Col>
						<Col
							style={{ width: '20%', float: 'left', display: 'inline-block' }}
						>
							<div>
								<Search
									placeholder="请输入人名或作品"
									onSearch={(value) => console.log(value)}
									style={{
										width: '250px',
										padding: '8px 5px',
										borderRadius: '40px 40px 40px 40px',
									}}
								/>
							</div>
						</Col>
					</Row>
				</Header>
				<Content>
					<BrowserRouter>
						<Switch>
							<Route path="/" exact component={Subject}></Route>
							<Route path="/political" exact component={Subject}></Route>
							<Route path="/history" exact component={PersonalPage}></Route>
							{/* <Route path="/economic" exact component={}></Route> */}
							<Route path="/communication" exact component={Articles}></Route>
						</Switch>
					</BrowserRouter>
				</Content>
			</Layout>
		);
	}
}

export default Nav;
