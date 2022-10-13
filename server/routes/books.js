const {VerifyTokenAndAdmin,VerifyToken,VerifyTokenAndAuthBooks } = require("../middlewares/JWT");
const Book = require("../models/Book");
const router = require("express").Router();

//get All Books in sorted order.
router.get("/",async(req,res)=>{
    try {
        const books= await Book.find().populate('user','username').sort({createdAt: -1});
        res.status(200).json({status:true,data:books});
    } catch (error) {
        console.log(error);
        res.status(500).json({status:false,error});
    }
});

router.get("/myBooks",VerifyToken,async(req,res)=>{
        try {
            const books=await Book.find({user:req.user.id}).populate('user','username');
            console.log(books);
            res.status(200).json({status:true,data:books});
        } catch (error) {
            console.log(error);
            res.status(500).json({status:false,error});
        }
});

//get Book by id
router.get("/:id",async(req,res)=>{
    try {
        const book=await Book.findById(req.params.id).populate('user','username');
        res.status(200).json({status:true,data:book});
    } catch (error) {
        console.log(error);
        res.status(500).json({status:false,error});
    }
});


//Add new book
router.post("/",VerifyToken,async(req,res)=>{
	
	const {body,...rest}=req;
	console.log(body);
    const newBook=new Book(body);
    try {
        const savedBook=await newBook.save();
        res.status(201).json({status:true,data:savedBook});
    } catch (error) {
        res.status(500).json({status:false,error,body});
    }
});

//Update Book by id
router.put("/:id/:user",VerifyTokenAndAuthBooks,async (req,res)=>{
    try {
        const updateBook= await Book.findByIdAndUpdate(
            req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({status:true,data:updateBook._doc});
    } catch (error) {
        res.status(500).json({status:false,error});
    }
});

//Delete Book by id
router.delete("/:id/:user",VerifyTokenAndAuthBooks,async (req,res)=>{
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:true
        });
    } catch (error) {
        res.status(500).json({status:false,error});
    }
});

module.exports = router;