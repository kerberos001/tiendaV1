import ProveedorTransaction from '../transaction/ProveedorTransaction';

class ProveedorGestor{

    constructor(){
        this.proveedorTransaction = new ProveedorTransaction();
    }
    
    consultarProveedores(estado){
        return this.proveedorTransaction.getAllProveedores(estado);
    }
    
    crearProveedor(params){
        return this.proveedorTransaction.addProveedor(params);
    }
    
    
}
export default ProveedorGestor;