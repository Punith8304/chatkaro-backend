import { Socket, type ExtendedError } from "socket.io";
declare const connectionCB: (socket: Socket) => void;
export declare const checkConnection: (socket: Socket, next: (err?: ExtendedError) => void) => void;
export default connectionCB;
//# sourceMappingURL=liveMessageService.d.ts.map