import PromisesTransaction from './PromisesTransaction';

class ArticuloTransaction{

    constructor(){
        this.promisesTransaction = new PromisesTransaction();
    }
    //select expand(linkProveedor) from articulo where estado = '1'
    
    getAllArticulo(estado){
        let query = 'select from articulo';
        if(estado){
            query = query.concat(' where estado = ').concat(estado);
        }        
        return this.promisesTransaction.promiseAllData(query);
    }
    
    addArticulo(params){
        let query = 'insert into Articulo(descripcion,estado,fechaCad,fechaReg,imagen,nombre,precioReal,precioVenta,stock,linkProveedor)';
        query = query.concat('values(:descripcion,:estado,:fechaCad,:fechaReg,:imagen,:nombre,:precioReal,:precioVenta,:stock,:linkProveedor)');
        return this.promisesTransaction.promiseAddData(query,params);
    }
}

export default ArticuloTransaction;