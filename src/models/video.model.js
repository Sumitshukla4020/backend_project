import mongoose, {Schema} from mongoose

const videoSchema = new mongoose({
    videoFile: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    isPublished: {
        type: bool,
        required: true
    },
    owner: {
        type: Schema.Type.ObjectId,
        ref: "USer",
        required: true
    }
},{timestamps: true})

export const Video = new mongoose.model("Video", videoSchema)