import schema from '../schemaBuilder.js'

const getStory = async(req,res)=>{
    try{
        const post = await schema.find()
        res.status(200).json(post)
    }catch(err){
        res.send(404).json({ message:err.message })
    }
}

const createStory = async(req,res)=>{
    try{
        //create a post with the data(will get data from req(request))
        const user = new schema({ ...req.body })
        await user.save()
    }catch(err){
        res.send(409).json({message:err.message})
    }
}

export {getStory,createStory}
