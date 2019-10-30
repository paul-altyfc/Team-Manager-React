import React from "react";
import { connect } from "react-redux";

const Developers = ({developers, addLeader, addFrontend, addBackend}) => (
		<div>
			<h2>Desarrolladores</h2>
			<ul className="wrapper-developers">
				{
					developers.map(dev=>(
						<li key={dev.id} className="Developer card">
							<img className="devPic" width="100px" height="100px" src={dev.pic} alt={dev.name}/>
							<h3 className="devName">{dev.name}</h3>
							<div className="buttons">
								<button className="btn btn-sm" onClick={() => addLeader(dev)}>Leader</button>
								<button className="btn btn-sm" onClick={() => addFrontend(dev)}>Frontend</button>
								<button className="btn btn-sm" onClick={() => addBackend(dev)}>Backend</button>
							</div>
						</li>
					))
				}
			</ul>
		</div>	
);

const mapStateToProps = state => ({
	developers: state.developers
});

const mapDispatchToProps = dispatch => ({
	addLeader(dev) {
		dispatch({
			type: "ADD_LEADER",
			dev
		})
	},
	addFrontend(dev){
		dispatch({
			type: "ADD_FRONTEND",
			dev
		})
	},
	addBackend(dev){
		dispatch({
			type: "ADD_BACKEND",
			dev
		})
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Developers)