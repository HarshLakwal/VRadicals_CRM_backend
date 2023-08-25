import VRadicalsModel from "../Models/VRadicals.model.js";
import joi from 'joi'
import custumErrorHandler from "../services/custumErrorHandler.js";
const inputSenitizer = joi.object({
  homeRightContent: joi.string().required(),
  homeLeftContent: joi.string().required(),
  VRadicalsArticel: joi.string().required(),
  contactNo: joi.string().required(),
  emailId: joi.string().required(),
  teamName: joi.string().required(),
  teamPost: joi.string().required(),
  tweeterLink: joi.string().required(),
  facebookLink: joi.string().required(),
  instaLink: joi.string().required(),
  linkedInLink: joi.string().required(),
})
const addContentController = {
  async addContent(req, res, next) {
    const { error } = inputSenitizer.validate(req.body);
    if (error) {
      return next(error)
    }
    try {
      const {
        homeRightContent,
        homeLeftContent,
        VRadicalsArticel,
        contactNo,
        emailId,
        teamName,
        teamPost,
        tweeterLink,
        facebookLink,
        instaLink,
        linkedInLink } = req.body;
      let ventureLogo = [];
      let productsLogo = [];
      let partnerLogo = [];
      let teamImg ;

      if (req.files) {
        req.files.ourVentureLogos.map((file) => (
          ventureLogo.push(file.filename)
        ))
        req.files.ourProductsLogos.map((file) => (
          productsLogo.push(file.filename)
        ))
        req.files.ourPartnerLogos.map((file) => (
          partnerLogo.push(file.filename)
        ))
        req.files.teamImg.map((file) => (
          teamImg = file.filename
        ))
      }

      const VRadicals = new VRadicalsModel({
        homeRightContent,
        homeLeftContent,
        VRadicalsArticel,
        ourVentureLogos: ventureLogo,
        ourProductsLogos: productsLogo,
        ourPartnerLogos: partnerLogo,
        ourTeam: [
          {
            name: teamName,
            post: teamPost,
            img: teamImg
          }
        ],
        contactNo,
        emailId,
        tweeterLink,
        facebookLink,
        instaLink,
        linkedInLink
      })
      const result = await VRadicals.save();
      if (result) {
        return res.status(200).json({ message: "Successfully added content" })
      }
    }
    catch (err) {
      // return next(err)
      console.log(err)
    }
  }
};
export default addContentController;
