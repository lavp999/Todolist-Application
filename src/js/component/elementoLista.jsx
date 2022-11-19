import React from "react";

const borraElementos = elemento => {
	setlista(lista.filter(i != elemento));
};

const listaItems = (miArray) => miArray.map((elemento, index) => {
									console.log(elemento, index);
									return (<li >
												<div className="divLi">
													<p>{elemento}</p>
													<button className="btn" onClick={borraElementos}> <i className="fas fa-trash-alt" /></button>
												</div>
											</li>
											)
								});
								
const ElementoLista = (props) => {
	return (<ul>
			{listaItems(props.lista)}
			</ul>
			);
};

export default ElementoLista;