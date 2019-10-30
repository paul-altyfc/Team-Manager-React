import React from "react";
import Leaders from "./Leaders";
import Frontends from "./Frontends";
import Backends from "./Backends";

const SelectedTeam = () => (
	<section className="st-wrapper">
		<Leaders className="st-el" />
		<Frontends className="st-el" />
		<Backends className="st-el" />
	</section>
)

export default SelectedTeam;