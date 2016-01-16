import ArticuloGestor from '../gestor/ArticuloGestor';
import ProveedorGestor from '../gestor/ProveedorGestor';

let proveedorGestor = new ProveedorGestor();
let params = {
    descripcion:'Pronaca',
    estado:'1',
    apellido:'Pronaca',
    cedula:'123456789',
    nombre:'jorge',
    ruc:'789456',
    telefono:'0',
    listDiasEntrega:['lunes','miercoles']
};

// proveedorGestor.crearProveedor(params);

let promiseResult2 = proveedorGestor.consultarProveedores('1');
let articuloGestor = new ArticuloGestor();


promiseResult2.then(result => {				
            console.log(result);	    
            
            let ridProv = result[0];
            ridProv = ridProv['@rid'];
            let date = new Date();
            var date2 = new Date(2016, 11, 12, 7, 40);
    
    
            let paramsArt = {
                descripcion:'Amor',
                estado:'1',
                fechaCad:date2,
                fechaReg:date,
                nombre:'Chocolates',
                precioReal:'2.5',
                precioVenta:'2.6',
                stock:'2',
                linkProveedor:ridProv
            };
            
            //articuloGestor.crearArticulo(paramsArt);        
    
    
            let promiseResult = articuloGestor.consultarArticulos('1');


            promiseResult.then(result => {				
				console.log(result);
                let resultArt = result[0];
                console.log(resultArt.linkProveedor);
			})
			.catch(error => {
				console.log(error);
			});

    
    
    })
    .catch(error => {
        console.log(error);
    });




