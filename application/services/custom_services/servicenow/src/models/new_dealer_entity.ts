
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const new_dealer_entitySchema = new Schema({
   personal_title: String,
   first_name: String,
   last_name: String,
   employee_type: String,
   employee_position: String,
   email: String,
   supplier_code: Number,
   territory: String,
   phone: Number,
   fax: Number,
   partner_description: String,
   address_1: String,
   address_2: String,
   address_3: String,
   county: String,
   zipcode: Number,
   country_iso_code: Number,
   language_iso_code: Number,
   application_access: String
})

const new_dealer_entityModel = mongoose.model('new_dealer_entity', new_dealer_entitySchema, 'new_dealer_entity');
export default new_dealer_entityModel;
