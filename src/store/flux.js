

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            datos : [],
			datosPaciente: []
		},
		actions:
		{

			setDatos: (data)=>{
				let datos = getStore().datos	   //variable para meter datos
				datos.push(data)
				setStore({datos: [...datos]})
			},
			setborrarfavorito: (data) => {									//funcion para borrar elemento de lista
				let aux = getStore().datos.filter(valor => valor !== data)  //crear un array para meter el resultado de filter
				setStore({datos: aux})}

}
	};
};

export default getState;