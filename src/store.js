import { createStore } from "redux";

const initialState = {
	developers: [{
			id: 1,
			name: 'Robwert Mota',
			pic: 'https://i.postimg.cc/mgnPxBHq/IMG-20190729-180841.jpg'
		},
		{
			id: 2,
			name: 'Jorge Hernandez',
			pic: 'https://i.postimg.cc/mD4sqZMJ/13614947-576214032557508-4080430973290331824-n.jpg'
		},
		{
			id: 3,
			name: 'Jose Lucas Parra',
			pic: 'https://i.postimg.cc/fy2QJxFQ/24862610-1996079644014610-7131837919189625970-n.jpg'
		},
		{
			id: 4,
			name: 'Eric Maxwell',
			pic: 'https://i.postimg.cc/gjkPzMgK/54256309-2254623104803886-3446681233218600960-n.jpg'
		}
	], 
	leaders: [],
	frontendDevelopers: [],
	backendDevelopers: [],
}

const reducerLeader = (state = initialState, action) => {

	console.log(action);

	if(action.type === "ADD_LEADER"){
		return {
			...state,
			leaders: state.leaders.concat(action.dev), 
			developers: state.developers.filter(dev => dev.id !== action.dev.id)
		}
	}
	if(action.type === "ADD_FRONTEND"){
		return {
			...state,
			frontendDevelopers: state.frontendDevelopers.concat(action.dev), 
			developers: state.developers.filter(dev => dev.id !== action.dev.id)
		}
	}
	if(action.type === "ADD_BACKEND"){
		return {
			...state,
			backendDevelopers: state.backendDevelopers.concat(action.dev), 
			developers: state.developers.filter(dev => dev.id !== action.dev.id)
		}
	}

	if(action.type === "REMOVE_LEADER"){
		return {
			...state,
			leaders: state.leaders.filter(leader => leader.id !== action.leader.id),
			developers: state.developers.concat(action.leader)
		}
	}

	if(action.type === "REMOVE_FRONTEND"){
		return {
			...state,
			frontendDevelopers: state.frontendDevelopers.filter(frontend => frontend.id !== action.frontend.id),
			developers: state.developers.concat(action.frontend)
		}
	}

	if(action.type === "REMOVE_BACKEND"){
		return {
			...state,
			backendDevelopers: state.backendDevelopers.filter(backend => backend.id !== action.backend.id),
			developers: state.developers.concat(action.backend)
		}
	}
	return state;
}

export default createStore(reducerLeader);