

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
            datos : []
		},
		actions:
		{

			setDatos: (data)=>{
				let datos = getStore().datos		   //variable para meter datos
				datos.push(data)
								//indica que datos es igual a nwedatos, todo lo que ponga en newdatos se metera en el datos del store
			},
			setborrarfavorito: (data) => {									//funcion para borrar elemento de lista
				let aux = getStore().datos.filter(valor => valor !== data)  //crear un array para meter el resultado de filter
				setStore({datos: aux})}

	

			
}
	};
};

export default getState;