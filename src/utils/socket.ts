import io from 'socket.io-client';

const socket = io('ws://127.0.0.1:8888', {
  transports: ['websocket']
});

export default socket;

// export function sendMessage(data:any) {
//   socket.emit("clientMsg", data);
// }

const events:Array<Function> = [];

export function sendMessage(receiver:string, sender: string, message:string, messageType:number) {
  if (sender.length === 0 || receiver.length === 0) throw new Error("发送错误")
  socket.emit("clientMsg", {
    receiver,
    content: message,
    contentType: messageType,
    sender: sender
  });
}
export function getServerMsg(cb:()=>void) {
  events.push(cb);
}
socket.on("serverMsg", (data)=>events.forEach(item=>item(data)));

