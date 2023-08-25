import multer from 'multer';
import path from 'path'

/*-------------------Image Upload vai Multer---------------------------*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        // console.log(file)
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const imgExtansionFilter = (req, file, cb) => {
    // console.log(file.mimetype)
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
       return cb(null, true)
    }
    else {
        return cb(new Error('Only .png, .jpeg format allowed!'));
    }
}

const imgUpload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 //5Mb
    },
    fileFilter: imgExtansionFilter
});

export default imgUpload ;  