const Model = require("./model");

class Controller {
    static async insertData(req, res, next){
        try{
            const data = req.body;
            await Model.insertData(data);
            res.send("OK");
        }
        catch(err){
            console.error(err);
            next(err);
            
        }
    };

    static async getData(req, res, next){
        try{
            
            const result = await Model.getData();
            res.send(result);
        }
        catch(err){
            console.error(err);
            next(err);
            
        }
    };
    static async updateData(req, res, next){
        try{
            const {id, update} = req.body;
            await Model.updateData(id, update);
            res.send("result");
        }
        catch(err){
            console.error(err);
            next(err);
            
        }
    }
    static async delateData(req, res, next){
        try{
            const data = req.body;
            await Model.updateData(id);
            res.send("deleted");
        }
        catch(err){
            console.error(err);
            next(err);
            
        }
    }
    static async insertDataPic(req, res, next){
        try{
            const {id} = req.body;
            await Model.updateData(id);
            res.send("deleted");
        }
        catch(err){
            console.error(err);
            next(err);
            
        }
    }
}

module.exports = Controller;