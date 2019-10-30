import React from 'react';
import { connect } from "react-redux";

const Frontends = ({frontendDevelopers, removeFrontend}) => (
	<section className="st-el">
		<h2>Desarrolladores Frontend</h2>
		<div className="FrontendTeam">
			{
				frontendDevelopers.map(frontend=>(
					<article className="Frontend card" key={frontend.id}>
						<div>
							<img className="devPic" width="100px" height="100px" src={frontend.pic} alt={frontend.name} />
							<p className="devName">{frontend.name}</p>

						</div>
						
						<button className="btn" onClick={() => removeFrontend(frontend)}>Retirar</button>
						
					</article>
				))
			}
		</div>
	</section>
)

const mapStateToProps = state => ({
	frontendDevelopers: state.frontendDevelopers
});

const mapDispatchToProps = dispatch => ({

	removeFrontend(frontend){
		dispatch({
			type: "REMOVE_FRONTEND",
			frontend
		})
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Frontends);