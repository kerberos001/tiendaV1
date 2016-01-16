import Express from 'express';
import BodyParser from 'body-parser';
import Service from './service/Service'

class Index{
    constructor(){
        this.serviceExpress = Express();        
        this.serviceExpress.use(BodyParser.json());
    }
    
    startServices(){
        let service = new Service(this.serviceExpress);                
    }
    
}

let index = new Index();
index.startServices();
index.serviceExpress.listen(3000);
