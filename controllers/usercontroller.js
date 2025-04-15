const User = require('../models/userschema');

exports.Register = async () => {
    const {name,email,password,role,mobile,designation} = req.body;
    try {
        let user = User.findOne({email});
        if(user){
            res.send.status(400).json({message: 'user already exist'})
        }
        user = new User({
            name,email,password,role,mobile,designation
        })
        await user.save();
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.send().status(201).json({message:'user registered successfully',token:token});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

exports.Login = async () =>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            res.send().status(400).json({message: 'user not found'});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message: 'creadential'});
        const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expireIn:'1h'});
        res.status(200).json({
            message: 'login successful',
            token:token
        })
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}