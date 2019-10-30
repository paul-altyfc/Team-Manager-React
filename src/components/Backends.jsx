import React from 'react';
import { connect } from "react-redux";

const Backends = ({backendDevelopers, removeBackend}) => (
	<section className="st-el">
		<h2>Desarrolladores Backend</h2>
		<div className="BackendTeam">
			{
				backendDevelopers.map(backend=>(
					<article className="Backend card" key={backend.id}>
						<div>
							<img className="devPic" width="100px" height="100px" src={backend.pic} alt={backend.name} />
							<p className="devName">{backend.name}</p>
						
						</div>
						<button className="btn" onClick={() => removeBackend(backend)}>Retirar</button>
					</article>
				))
			}
		</div>
	</section>
)

const mapStateToProps = state => ({
	backendDevelopers: state.backendDevelopers
});

const mapDispatchToProps = dispatch => ({
	removeBackend(backend){
		dispatch({
			type: "REMOVE_BACKEND",
			backend
		})
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Backends);