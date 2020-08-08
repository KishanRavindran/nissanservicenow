import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class systemaccessentityController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/systemaccessentity/get', this.GpGetAllValues);
this.router.put('/systemaccessentity/update', this.GpUpdate);
this.router.post('/systemaccessentity/save', this.GpCreate);
this.router.delete('/systemaccessentity/delete/:id', this.GpDelete);
    }

public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemaccessentityController.ts: GpGetAllValues');
        new ApiAdaptar().get(Constant.SERVICENOWURL + `${req.url}` ).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemaccessentityController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemaccessentityController.ts: GpUpdate');
        new ApiAdaptar().put(Constant.SERVICENOWURL + `${req.url}` , req.body).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemaccessentityController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemaccessentityController.ts: GpCreate');
        new ApiAdaptar().post(Constant.SERVICENOWURL + `${req.url}` , req.body).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemaccessentityController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemaccessentityController.ts: GpDelete');
        new ApiAdaptar().delete(Constant.SERVICENOWURL + `${req.url}` ).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemaccessentityController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }




}
