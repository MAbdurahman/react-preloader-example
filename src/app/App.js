import React, { Component } from 'react';
import Loader from '../components/loader/Loader';
import ShowDetail from '../components/show-details/ShowDetail';

class App extends Component {
	state = { loading: true };
	sleep = milliseconds => {
		return new Promise(resolve => setTimeout(resolve, milliseconds));
	};
	wait = async (milliseconds = 2000) => {
		await this.sleep(milliseconds);
		this.setState({
			name: 'Mahdi Abdurrahman',
			company: 'New Horizons',
			blog: 'https://duckduckgo.com',
			location: 'Memphis, TN',
			bio: 'Software and Web Developer',
			loading: false,
		});
	};
	fetchGitHub = () => {
		fetch('https://api.github.com/users/MAbdurahman')
			.then(res => res.json())
			.then(res => {
				let { name, company, blog, location, bio } = res;
				this.setState({
					name: name,
					company: company,
					blog: blog,
					location: location,
					bio: bio,
					loading: false,
				});
			})
			.catch(error => {
				console.log(error);
				this.wait();
			});
	};
	componentDidMount() {
		this.wait(2000);
		// this.fetchGitHub();
	}

	render() {
		if (this.state.loading) return <Loader />;
		let { name, blog, company, location, bio } = this.state;
		let details = { name, blog, company, location, bio };

		return <ShowDetail details={details} />;
	}
}

export default App;
