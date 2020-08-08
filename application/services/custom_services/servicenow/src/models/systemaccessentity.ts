
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const systemaccessentitySchema = new Schema({
   first_name: String,
   last_name: String,
   nissan_username: Number,
   renault_username: Number,
   employee_type: String,
   employee_position: String,
   email: String,
   country_code: Number,
   language_code: Number,
   application_list: String,
   file_attached: String,
   error_message: String
})

const systemaccessentityModel = mongoose.model('systemaccessentity', systemaccessentitySchema, 'systemaccessentity');
export default systemaccessentityModel;
