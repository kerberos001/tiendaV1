import PromisesTransaction from './PromisesTransaction';

class ProveedorTransaction {

    constructor(){
        this.promisesTransaction = new PromisesTransaction();
    }
    
     getAllProveedores(estado){
        let query = 'select from proveedor';
        if(estado){
            query = query.concat(' where estado = ').concat(estado);
        }        
        return this.promisesTransaction.promiseAllData(query);
    }
    
    addProveedor(params){
        let query = 'insert into Proveedor(descripcion,estado,apellido,cedula,nombre,ruc,telefono,listDiasEntrega)';
        query = query.concat('values(:descripcion,:estado,:apellido,:cedula,:nombre,:ruc,:telefono,:listDiasEntrega)');
        console.log(query);
        return this.promisesTransaction.promiseAddData(query,params);
    }
}

export default ProveedorTransaction;