export interface Notification {

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

export class NotificationCreator {

    private configuredOS: string = "windows";
    public notification : Notification;

    public createNotification() {
       if(this.configuredOS == "windows"){
        this.notification = new WindowsNotification();
       }
       else if(this.configuredOS == "mac"){
        this.notification = new MacOSNotification();
       }
       
       return this.notification;
    }
}

export class NotificationService {
    
    public notificationCreator: NotificationCreator;
    
    constructor(notificationFactory: NotificationCreator){
        this.notificationCreator = notificationFactory;
    }

    private greetUser(){
        let notification: Notification = this.notificationCreator.createNotification();

        let title = "Welcome !";
        let text = "Let's take a tour";
        let thumbnailURL = "../assets/welcome.png";

        notification.render(title, text, thumbnailURL);
        
        notification.onClick(()=>{
            console.log("Notification was clicked");
            
        });
        
        notification.onClosed(()=>{
            console.log("Notification was closed");
        });
    }
}