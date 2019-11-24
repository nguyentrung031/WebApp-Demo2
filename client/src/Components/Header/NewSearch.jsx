import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';

class NewSearch extends Component {
	render() {
		const {item} = this.props.location.state;
		return (
			<div className="container search-wrap">
				{
					item.map((value,key) => (
						<ul className="list-unstyled" key={key}>
							<li className="media">
								<Link to={`/Detail/${value.id}`}>
									<img src={value.img} className="mr-3 i1" alt={value.name} />
								</Link>
								<div className="media-body">
									<Link to={`/Detail/${value.id}`}>
										<h3 className="mt-0 mb-1">{value.name}</h3>
									</Link>
									<span>{value.date}</span>
									<p>{value.content}</p>
								</div>
							</li>
						</ul>
					))
				}
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		List: state.List
	}
}
export default connect(mapStateToProps)(NewSearch);