import * as mongoose from 'mongoose';
import systemaccessentityModel from '../models/systemaccessentity';
import { CustomLogger } from '../config/Logger'


export class systemaccessentityDao {
    private systemaccessentity = systemaccessentityModel;
    constructor() { }
    
    public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into systemaccessentityDao.ts: GpGetAllValues')

this.systemaccessentity.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemaccessentityDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(systemaccessentityData, callback){
new CustomLogger().showLogger('info', 'Enter into systemaccessentityDao.ts: GpUpdate')

this.systemaccessentity.findOneAndUpdate({ _id: systemaccessentityData._id }, systemaccessentityData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemaccessentityDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(systemaccessentityData, callback){
new CustomLogger().showLogger('info', 'Enter into systemaccessentityDao.ts: GpCreate')
let temp = new systemaccessentityModel(systemaccessentityData);
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemaccessentityDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(systemaccessentityId, callback){
new CustomLogger().showLogger('info', 'Enter into systemaccessentityDao.ts: GpDelete')

this.systemaccessentity.findByIdAndRemove(systemaccessentityId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemaccessentityDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}


}