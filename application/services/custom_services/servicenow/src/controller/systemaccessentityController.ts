import { Request, Response } from 'express';
import { systemaccessentityService } from '../service/systemaccessentityService';
import { CustomLogger } from '../config/Logger'
let systemaccessentity = new systemaccessentityService();

export class systemaccessentityController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
systemaccessentity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into systemaccessentityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from systemaccessentityController.ts: GpGetAllValues');
    })}
public GpUpdate(req: Request, res: Response) {
systemaccessentity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into systemaccessentityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from systemaccessentityController.ts: GpUpdate');
    })}
public GpCreate(req: Request, res: Response) {
systemaccessentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into systemaccessentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from systemaccessentityController.ts: GpCreate');
    })}
public GpDelete(req: Request, res: Response) {
systemaccessentity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into systemaccessentityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from systemaccessentityController.ts: GpDelete');
    })}


}