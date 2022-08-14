export class Notification {

    public title: string;
    public text: string;
    public thumbnailURL: string;

    constructor(title, text, thumbnailURL){
        this.title = title;
        this.text = text;
        this.thumbnailURL = thumbnailURL;
    }

    public render() {
        console.log("Windows Notification Displayed with title: ", this.title);
    }
    public onClick(callback): void {
        console.log("Windows Notification clicked");
        callback();
    }

    public onClosed(callback): void {
        console.log("Windows Notification Closed");
        callback();
    }
}

export class MainApplication {
    
}