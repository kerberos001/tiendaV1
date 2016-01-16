import PromisesTransaction from './PromisesTransaction';

class CompradorTransaction{

    constructor(){
        this.promisesTransaction = new PromisesTransaction();
    }
    //select expand(linkProveedor) from Comprador where estado = '1'
    
    getAllComprador(estado){
        let query = 'select from Comprador';
        if(estado){
            query = query.concat(' where estado = ').concat(estado);
        }        
        return this.promisesTransaction.promiseAllData(query);
    }
    
    addComprador(params){
        let query = 'insert into Comprador(apellido,cedula,estado,nombre,debe)';
        query = query.concat('values(:apellido,:cedula,:estado,:nombre,:debe)');
        return this.promisesTransaction.promiseAddData(query,params);
    }
}

export default CompradorTransaction;