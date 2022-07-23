import React from 'react'
import Character from "./Character"

const	CharacterList = ({characters, loading}) =>{

	if(loading){
		return (
			<div>Loading...</div>
		)
	}

	return(
		<div className="container">
			<div className="row">
				{
					characters.map(character =>{
						return (
							<div className="col-md-4" key={character.id}>
								<Character character={character} />
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default CharacterList