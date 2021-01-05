const Command = require('./Command');

class Update extends Command {
    constructor(title, content){
        super();
        this.title = title;
        this.content = content;
        this.oldContent = "";
    }
    execute(db){
        const oldContent = db.getPost({title: this.title});
        if(oldContent.length === 0){
            console.log('UPDATE FAILED: Post not found');
            return;
        }
        this.oldContent = oldContent[0].content;
        this.update(db);
    }
    undo(db){
        db.update(this.title, this.oldContent);
    }

    update(db){
        db.update(this.title, this.content);
    }
}

module.exports = Update;