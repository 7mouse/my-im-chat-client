import io from 'socket.io-client';

const socket = io('http://127.0.0.1:8888');

export default socket;

export function sendMessage(data:any) {
  socket.emit("clientMsg", data);
}
export function getServerMsg(cb:()=>void) {
  socket.on("serverMsg", cb);
}

