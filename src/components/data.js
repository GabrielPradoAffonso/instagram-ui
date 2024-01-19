import foto from '../assets/foto.png'
import foto2 from '../assets/foto2.png';
import foto3 from '../assets/foto3.png';
import foto4 from '../assets/foto4.png';
import Post from '../assets/post1.png';
import Post1 from '../assets/post2.png';
import Post2 from '../assets/post3.png';
import fotoUser from '../assets/fotoUser.png'

export const getPostsData = () => {
  return [
    {
      id: 1,
      username: 'Incrível',
      userPhoto: foto3,
      postImage: Post,
      likes: 392,
      caption: 'Olá pessoal, esse App é um clone UI do instagram!',
      comments: 'Ver todos os 26 comentários',
      timestamp: 'Há 50 minutos',
    },
    {
      id: 2,
      username: 'É',
      userPhoto: foto2,
      postImage: Post1,
      likes: 581,
      caption: 'Eu estou aprendendo e melhorando a cada dia',
      comments: 'Ver todos os 31 comentários',
      timestamp: 'Há 1 hora',
    },
    {
      id: 3,
      username: 'ReactNative',
      userPhoto: foto,
      postImage: Post2,
      likes: '1.062',
      caption: 'Espero que gostem!!',
      comments: 'Ver todos os 52 comentários',
      timestamp: 'Há 2 horas',
    },
  ];
};

export const getStoryData = () => {
  return [
    {
      id: 'user',
      photoURL: fotoUser,
      isUser: true,
      name: 'Seu story',
    },
    {
      id: 1,
      photoURL: foto,
      name: 'ReactNative',
    },
    {
      id: 2,
      photoURL: foto2,
      name: 'É',
    },
    {
      id: 3,
      photoURL: foto3,
      name: 'incrível',
    },
    {
      id: 4,
      photoURL: foto4,
      name: 'demais!',
    },
  ];
};
