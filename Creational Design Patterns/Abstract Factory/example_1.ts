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

export class LinuxNotification implements Notification {

    public render(title, text, thumbnailURL) {
        console.log("Linux Notification Displayed with following information: ", title);
        console.log("Text: ", text);
        console.log("URL: ", thumbnailURL);
    }
    public onClick(callback): void {
        console.log("Linux Notification clicked");
        callback();
    }
    public onClosed(callback): void {
        console.log("Linux Notification Closed");
        callback();
    }
}

export interface Downloader {
    render(progress: number, mediaFiles: string[]);
    cancelDownload(): void;
    pauseDownload(): void;
}

export class WindowsDownloader implements Downloader
{
    public render(progress: number, mediaFiles: string[]){
        console.log("Windows Downloader opened");    
    }

    public cancelDownload(){
        console.log("Cancelled Downloads");
    }
    public pauseDownload() {
        console.log("Paused Downloads");
    }
}

export class MacOSDownloader implements Downloader
{
    public render(progress: number, mediaFiles: string[]){
        console.log("MacOS Downloader opened");    
    }

    public cancelDownload(){
        console.log("Cancelled Downloads");
    }
    public pauseDownload() {
        console.log("Paused Downloads");
    }
}

export class LinuxDownloader implements Downloader
{
    public render(progress: number, mediaFiles: string[]){
        console.log("Linux Downloader opened");    
    }

    public cancelDownload(){
        console.log("Cancelled Downloads");
    }
    public pauseDownload() {
        console.log("Paused Downloads");
    }
}



export interface GUIFactory {
    createNotification(): Notification;
    createDownloader(): Downloader;
}

export class WindowsGUIFactory implements GUIFactory {
    public createNotification(): Notification {
        return new WindowsNotification();
    }

    public createDownloader(): Downloader {
        return new WindowsDownloader();
    }
}
export class MacOSGUIFactory implements GUIFactory {
    public createNotification(): Notification {
        return new MacOSNotification();
    }

    public createDownloader(): Downloader {
        return new MacOSDownloader();
    }
}
export class LinuxGUIFactory implements GUIFactory {
    public createNotification(): Notification {
        return new LinuxNotification();
    }

    public createDownloader(): Downloader {
        return new LinuxDownloader();
    }
}





export class MainApplication {
    
    private factory: GUIFactory;
    constructor(guiFactory: GUIFactory){
        this.factory = guiFactory;
        this.greetUser();
    }

    private greetUser(){
        let notification: Notification = this.factory.createNotification();

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

export class NotificationService {
    
    private factory: GUIFactory;
    
    constructor(guiFactory: GUIFactory){
        this.factory = guiFactory;
    }

    private greetUser(){
        let notification: Notification = this.factory.createNotification();

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


let configuredOS: string = "windows";

let factory: GUIFactory;

if(configuredOS == "windows"){
    factory = new WindowsGUIFactory();
}
else if(configuredOS == "mac"){
    factory = new MacOSGUIFactory();
}
else if(configuredOS == "linux"){
    factory = new LinuxGUIFactory();
}

let application : MainApplication = new MainApplication(factory);