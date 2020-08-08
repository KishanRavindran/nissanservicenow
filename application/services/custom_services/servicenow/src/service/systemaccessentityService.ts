import { Request, Response } from 'express';
import {systemaccessentityDao} from '../dao/systemaccessentityDao';
import { CustomLogger } from '../config/Logger'
let systemaccessentity = new systemaccessentityDao();

export class systemaccessentityService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into systemaccessentityService.ts: GpGetAllValues')
     
     systemaccessentity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from systemaccessentityService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into systemaccessentityService.ts: GpUpdate')
     const  systemaccessentityData = req.body;
     systemaccessentity.GpUpdate(systemaccessentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from systemaccessentityService.ts: GpUpdate')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into systemaccessentityService.ts: GpCreate')
     const  systemaccessentityData = req.body;
     systemaccessentity.GpCreate(systemaccessentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from systemaccessentityService.ts: GpCreate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into systemaccessentityService.ts: GpDelete')
     const  systemaccessentityId = req.params.id;
     systemaccessentity.GpDelete(systemaccessentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from systemaccessentityService.ts: GpDelete')
         callback(response);
         });
    }


}