import io from 'socket.io-client';

export const connection = () => {
  io('http://localhost:8012/socket.io');
};
