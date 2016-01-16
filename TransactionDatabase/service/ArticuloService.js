import Service from './Service';
import ArticuloGestor from '../gestor/ArticuloGestor';


class ArticuloService{
    
    constructor(service){
        this.service = service;    
        this.articuloGestor = new ArticuloGestor();
    }
    
    consultarArticulos(){
        this.service.get('/servicesfindArticulos/:param',(req,res)=>{
            console.log(req.params['param']);
           let promiseResult = this.articuloGestor.consultarArticulos('1');
            
            promiseResult.then(result => {								
                res.json(result);
			})
			.catch(error => {
				res.json(error);
			});                        
        });
    }
    
    
    
}

export default ArticuloService;