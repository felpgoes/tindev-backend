const {Schema, model } = require ('mongoose')

const DevSchema = new Schema({
    name: {
        type: string,
        required: true,
    },
    user:{
        type: string,
        required: true,        
    },
    bio: string,
    avatar: {
        type: string,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
},  {
        timestamps: true,
});

    module.exports = model('Dev', DevSchema)