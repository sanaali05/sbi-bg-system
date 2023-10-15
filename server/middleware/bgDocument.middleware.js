import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/documents')
    },
    filename:function(req, file , cb){
        cb(null,Date.now() + '-' + file.originalname)
    }
})

const uploadDocuments = multer({storage });

export default uploadDocuments;