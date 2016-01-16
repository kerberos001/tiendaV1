import ArticuloTransaction from '../transaction/ArticuloTransaction';


class ArticuloGestor{

    constructor(){
        this.articuloTransaction = new ArticuloTransaction();
    }
    
    crearArticulo(params){
        return this.articuloTransaction.addArticulo(params);
    }
    
    consultarArticulos(estado){
        return this.articuloTransaction.getAllArticulo(estado);
    }

}

export default ArticuloGestor ;