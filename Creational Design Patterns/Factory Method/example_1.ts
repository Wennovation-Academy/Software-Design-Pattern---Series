export interface Notification{
    render(title, text, thumbnailURL): void;
    onClick(callback): void;
    onClosed(callback): void;
}

export class WindowsNotification implements Notification {

    public render(title, text, thumbnailURL) {
        console.log("Windows Notification Displayed with following information: ", title);
        console.log("Text: ", text);
        console.log("URL: ", thumbnailURL);
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

export class MacOSNotification implements Notification {

    public render(title, text, thumbnailURL) {
        console.log("MacOS Notification Displayed with following information: ", title);
        console.log("Text: ", text);
        console.log("URL: ", thumbnailURL);
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
        let notification: Notification;

        let title = "Welcome !";
        let text = "Let's take a tour";
        let thumbnailURL = "../assets/welcome.png";

        if(this.configuredOS == "windows") {
            notification = new WindowsNotification();
        }
        else if(this.configuredOS == "mac"){
            notification = new MacOSNotification();
        }

        notification.render(title, text, thumbnailURL);

    }
}

export class ChatService {

    private notification: Notification;
    private configuredOS: string = "mac";

    public onMessageRecieved(sender: string, message: string, avatarURL: string){
        
        if(this.configuredOS == "windows") {
            this.notification = new WindowsNotification();
        }
        else if(this.configuredOS == "mac"){
            this.notification = new MacOSNotification();
        }

        this.notification.render(sender, message, avatarURL);
    }
}