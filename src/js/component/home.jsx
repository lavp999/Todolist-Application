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
		if (evento.keyCode == 13) {
			setlista([].concat(lista, [evento.target.value]));
			setInputValue("");
		}
	}

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
						<ElementoLista lista={lista} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
