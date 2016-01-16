import PromisesTransaction from './PromisesTransaction';

class VentaTransaction{

    constructor(){
        this.promisesTransaction = new PromisesTransaction();
    }
    //select expand(linkProveedor) from Venta where estado = '1'
    
    getAllVenta(estado){
        let query = 'select from Venta';
        if(estado){
            query = query.concat(' where estado = ').concat(estado);
        }        
        return this.promisesTransaction.promiseAllData(query);
    }
    
    addVenta(params){
        let query = 'insert into Venta(estado,fechaReg,prestamo,referencia,tipoVenta,totalSumaReal,totalSumaVenta,valorPagado,linkComprador)';
        query = query.concat('values(:estado,:fechaReg,:prestamo,:referencia,:tipoVenta,:totalSumaReal,:totalSumaVenta,:valorPagado,:linkComprador)');
        return this.promisesTransaction.promiseAddData(query,params);
    }
}

export default VentaTransaction;