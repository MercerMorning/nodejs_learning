import {EventEmitter} from "events";

class Post extends EventEmitter {
    constructor(author, text) {
        super();
        this.author = author
        this.text = text
        this.likes = 0
    }

    like() {
        this.likes += 1
        this.emit('Likepost')
    }
}

const myPost = new Post('bogdan', 'my great post')
myPost.on('Likepost', () => {
    console.log('Post liked')
})
myPost.like()
