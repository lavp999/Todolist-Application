import React, {useState } from "react";
import ElementoLista from "./elementoLista.jsx";

//create your first component
const Home = () => {
	const [inputValue, setInputValue ] = useState('');
	const [lista, setlista ] = useState(["numero 1"]);

	function asigna(evento){
		setInputValue(evento.target.value);
	}

	function sumaToDo(evento){
		if (evento.keyCode == 13  && evento.target.value != "") {
			setlista([...lista, evento.target.value]);
			setInputValue("");
		}
	}

	const borraElementos = index => {
		setlista(lista.filter(i != index));
	};

	return (
		<div>
			<div className="cajaBlanca">
				<div className="text-center">
					<p className="titulo">todos</p>
				</div>
				<div className="tarjeta">
					<div>
						<input className="cajaInput" type="text" onChange={asigna} value={inputValue} onKeyDown={sumaToDo}/>
					</div>
					<div>
						<ul>
							<ElementoLista lista={lista} />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
