import React from "react";

const ElementoLista = (props) => {

	return (
			{props.lista.map(function(elemento){
                return (
						<li key={index}>
							{elemento}
							<button className="btn" onClick={borraElementos}>
								<i className="fas fa-trash-alt" />
							</button>
						</li>
				);
            })}
	);
};

export default ElementoLista;
