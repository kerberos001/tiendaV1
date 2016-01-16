import ArticuloService from './ArticuloService';


class Service{
    constructor(express){        
        this.articulosServices(express);
        
    }
    articulosServices(express){
       let articuloService = new ArticuloService(express);
        articuloService.consultarArticulos();    
    }
    
    
}

export default Service;