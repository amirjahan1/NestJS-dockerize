import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div style=" width: 90vw ; height: 90vh ; background-color: #fefefe ; display: flex; flex-direction: column ; justify-content: center ; align-items: center ">\n' +
        '    <h1 style="font-family: sans-serif">Hello from Amir Jahan</h1>\n' +
        '\n' +
        '     <p style="font-size: 40px"> my email address: <address><a href="mailto:amirjahan454@gmail.com" style="font-size: 20px"> Tap on me! </a></address></p>\n' +
        '\n' +
        '     <p style="font-size: 40px"> my Telegram account: <address><a href="tel:+989011497157" style="font-size: 20px"> ID @amirjahan_1 </a></address></p>\n' +
        '</div>';

  }
}
