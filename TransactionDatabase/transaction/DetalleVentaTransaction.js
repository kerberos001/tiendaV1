import PromisesTransaction from './PromisesTransaction';

class DetalleVentaTransaction{

    constructor(){
        this.promisesTransaction = new PromisesTransaction();
    }
    //select expand(linkProveedor) from DetalleVenta where estado = '1'
    
    getAllDetalleVenta(estado){
        let query = 'select from DetalleVenta';
        if(estado){
            query = query.concat(' where estado = ').concat(estado);
        }        
        return this.promisesTransaction.promiseAllData(query);
    }
    
    addDetalleVenta(params){
        let query = 'insert into DetalleVenta(cantidad,estado,linkArticulo,linkVenta)';
        query = query.concat('values(:cantidad,:estado,:linkArticulo,:linkVenta)');
        return this.promisesTransaction.promiseAddData(query,params);
    }
}

export default DetalleVentaTransaction;