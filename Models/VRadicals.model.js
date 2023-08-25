import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const logoSchema = new mongoose.Schema({
    logo: String,
  });
const VRadicalsSchema = new Schema({
    homeRightContent: { type: String },
    homeLeftContent: { type: String },
    VRadicalsArticel: { type: String },
    ourVentureLogos: {type: Array},
    ourProductsLogos:{type: Array},
    ourPartnerLogos:{type: Array},
    ourTeam: [
        {
            name: { type: String },
            post: { type: String },
            img: { type: String }
        }
    ],
    contactNo: { type: String },
    emailId: { type: String },
    tweeterLink: { type: String },
    facebookLink: { type: String },
    instaLink: { type: String },
    linkedInLink: { type: String },

}, { timestamps: true });


export default mongoose.model('VRadical', VRadicalsSchema, 'VRadicals');       