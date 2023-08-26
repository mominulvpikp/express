const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const student_Schema = new mongoose.Schema(
    {
        id: String,
        student_name: String,
        dob: Date,
        fathers_name: String,
        f_ocp: String, 
        f_monthly_Inc: Number,
        f_mobile: { type: Number, min: 11, max: 11 },
        f_nid: Number,

        mothers_name: String,
        m_ocp: String, 
        m_monthly_Inc: Number,
        m_mobile: { type: Number, min: 11, max: 11 },
        m_nid: Number,

        c_vill_name: String, 
        c_post_name: String, 
        c_upz_name: String, 
        c_dist_name: String, 

        p_vill_name: String, 
        p_post_name: String, 
        p_upz_name: String, 
        p_dist_name: String, 

        relizion: String,
        blode_group: String,

        gurdiance_name: String,
        g_ocp: String, 
        g_mobile: { type: Number, min: 11, max: 11 },
        g_address: String,

        createdOn:{
            type : String, 
            default : Date.now
        }
    }

);

module.exports = mongoose.model('students_info', student_Schema);