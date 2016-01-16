import Connection from '../connection/Connection';

class PromisesTransaction{

    constructor(){
        this.connection = new Connection();
        this.connection.connect();
    }
    
     promiseAllData(query){
         return new Promise((resolve,reject) => {
            this.connection.db.query(query)
                .then(result => {
                    resolve(result);
                }).catch(error => {
                    reject(error);
                });
         });
     }
    
    promiseOneData(table,rid){
        return new Promise((resolve, reject) => {
			this.connection.db.select().from(table).where({rid: rid}).one()
				.then(result => {
					resolve(result);
				})
				.catch(error => {
					reject(error);
				});
		});    
    }
    
    promiseAddData(query,params){        
        return new Promise((resolve,reject)=>{
            this.connection.db.query(query,{
                params:params
            })
            .then(result=>{
                resolve(result[0]);
            }).catch(error=>{
                reject(error);
            });
        });    
    }
}


export default PromisesTransaction;