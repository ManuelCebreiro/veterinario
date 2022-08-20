

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
            datos : []
		},
		actions:
		{

			getDatos: (data)=>{
				let newdatos = [...getStore().datos]      //variable para meter datos
				newdatos.push(data)
				setStore({datos:newdatos})						//indica que datos es igual a nwedatos, todo lo que ponga en newdatos se metera en el datos del store
			},
			setborrarfavorito: (data) => {									//funcion para borrar elemento de lista
				let aux = getStore().datos.filter(valor => valor !== data)  //crear un array para meter el resultado de filter
				setStore({datos: aux})}

	

			
}
	};
};

export default getState;