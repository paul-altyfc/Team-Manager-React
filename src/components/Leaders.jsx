import React from 'react';
import { connect } from "react-redux";

const Leaders = ({leaders, removeLeader}) => (
	<section className="st-el">
		<h2>Lideres</h2>
		<div className="LeaderTeam">
			{
				leaders.map(leader=>(
					<article className="Leader card" key={leader.id}>
						<div>
							<img className="devPic" width="100px" height="100px" src={leader.pic} alt={leader.name} />
							
							<p>{leader.name}</p>
						</div>
						<button className="btn" onClick={() => removeLeader(leader)}>Retirar</button>
						
					</article>
				))
			}
		</div>
	</section>
)

const mapStateToProps = state => ({
	leaders: state.leaders
});

const mapDispatchToProps = dispatch => ({
	removeLeader(leader){
		dispatch({
			type: "REMOVE_LEADER",
			leader
		})
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Leaders);
