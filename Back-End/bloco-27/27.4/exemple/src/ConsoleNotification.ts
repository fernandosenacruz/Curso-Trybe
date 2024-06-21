import Notificator from './INotificator';

export default class ConsoleNotification implements Notificator {
  sendNotification(message: string): void {
    console.log(`Here we go again! - ${message}`);
  }
}
