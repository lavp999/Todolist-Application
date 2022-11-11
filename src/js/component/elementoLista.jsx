import React from "react";

const ElementoLista = (props) => {

	return (
		<div>
			{props.lista.map(function(elemento){
                return (<div> {elemento} </div>);
            })}
		</div>
	);
};

export default ElementoLista;
