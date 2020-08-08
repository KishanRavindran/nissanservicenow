import { Request, Response, NextFunction } from "express";
import { systemaccessentityController } from '../controller/systemaccessentityController';


export class Routes {
    private systemaccessentity: systemaccessentityController = new systemaccessentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/systemaccessentity/get').get(this.systemaccessentity.GpGetAllValues);
app.route('/systemaccessentity/update').put(this.systemaccessentity.GpUpdate);
app.route('/systemaccessentity/save').post(this.systemaccessentity.GpCreate);
app.route('/systemaccessentity/delete/:id').delete(this.systemaccessentity.GpDelete);
     }

}