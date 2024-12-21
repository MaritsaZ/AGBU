const mongoose = require('mongoose');
const {connectMongo, disconnectMongo} = require('./config.mongo');//config.mongo ից ստանոեմ ենք ֆւնկցիաները
const mongoModel = require('./mongo.schema');
const {ObjectId} = mongoose.Types;

class Model {
    static async insertData(data){
        try {
            await connectMongo();
            await mongoModel.insertMany(data);
            
        } catch (error){
            console.error(error);
        }
        finally{
            await disconnectMongo();
        }
    };
    static async getData(){
        try {
            await connectMongo();
            const result = await mongoModel.find({ _id: new ObjectId("675d2e40c732d5c55fb9c45d")});//veradartsnum e []
            return result;
            
        } catch (error){
            console.error(error);
        }
        finally{
            await disconnectMongo();
        }
    };

    static async updateData(id, update){
        try {
            await connectMongo();
            const result = await mongoModel.findByIdAndUpdate(
 //Находит документ по ID и применяет обновления.
//Опция { new: true } возвращает обновленный документ вместо старого.
                id, 
                update,
                {new: true}
            );//veradartsnum e []

           console.log(result);
        
            
        } catch (error){
            console.error(error);
        }
        finally{
            await disconnectMongo();
        }
    }
    static async deleteData(){
        try {
            await connectMongo();
            const result = await mongoModel.findByIdAndDelete(id);//veradartsnum e []
            if (result) {
                console.log(`Document with id ${id} was deleted successfully.`);
            } else {
                console.log(`No document found with id ${id}.`);
            }
            
            return result; 
            
        } catch (error){
            console.error(error);
        }
        finally{
            await disconnectMongo();
        }
    };
    static async insertDataPic(data){
        try {
            await connectMongo();
            await mongoModel.insertMany(data);
            
        } catch (error){
            console.error(error);
        }
        finally{
            await disconnectMongo();
        }
    };
}
module.exports = Model;