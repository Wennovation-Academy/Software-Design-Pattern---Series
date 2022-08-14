export class WindowsNotification {

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

export class MacOSNotification {

    public title: string;
    public text: string;
    public thumbnailURL: string;

    constructor(title, text, thumbnailURL){
        this.title = title;
        this.text = text;
        this.thumbnailURL = thumbnailURL;
    }

    public render() {
        console.log("MacOS Notification Displayed with title: ", this.title);
    }
    public onClick(callback): void {
        console.log("MacOS Notification clicked");
        callback();
    }
    public onClosed(callback): void {
        console.log("MacOS Notification Closed");
        callback();
    }
}


export class MainApplication {
    
    private configuredOS = "windows";
    constructor(){
        this.greetUser();
    }

    private greetUser(){
        let notification;

        let title = "Welcome !";
        let text = "Let's take a tour";
        let thumbnailURL = "../assets/welcome.png";

        if(this.configuredOS == "windows"){

            notification = new WindowsNotification(title, text, thumbnailURL);
        }
        else if(this.configuredOS == "mac"){
            
        }
    }
}