import React, { useState, useEffect } from 'react';
import './styles.scss';

import api from '../../services/api';

function Universes({ history }) {
	const [universe, setUniverse] = useState([]);

	useEffect(() => {
		async function getUniverse() {
			const universeId = localStorage.getItem('universesInfo')
			const universeData = await api.get(`universes/${universeId}`);

			console.log(universeData.data);
			setUniverse(universeData.data);
		}

		getUniverse();
	}, []);

	return (
		<>
			<h1 className="welcome">Your Universe</h1>
			<div className="universe">
				<div className="grid">
					<div className="book">
						<h3>{universe.name}</h3>
						<img src={universe.image} alt={universe.name} />
						<p>{universe.description}</p>
						<p><strong>Races: </strong>{universe.races}</p>
						<p><strong>Places: </strong>{universe.places}</p>
					</div>
					<div></div>
					<div className="book">{universe.races}</div>
				</div>
			</div>
		</>
	);
}

export default Universes;
