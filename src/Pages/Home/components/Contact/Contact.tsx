import React, { useState } from 'react';

const Contact: React.FC = () => {
  // Estados para armazenar os valores do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar o formulário
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Resetar os campos do formulário após o envio
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className='w-full h-screen mx-auto p-6 bg-lightnude rounded-lg shadow-xl text-md'>
      <h2 className='text-2xl mb-4 font-normal font-hurricane text-5xl text-darkblue text-center'>
        Deixe seu recado
      </h2>
      <form onSubmit={handleSubmit} className='mx-auto max-w-md'>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-gray-700 text-md font-bold mb-2'
          >
            Seu Nome
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Seu Nome'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700  font-bold mb-2'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Seu Email'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='message'
            className='block text-gray-700  font-bold mb-2'
          >
            Recado
          </label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
            placeholder='Sua Mensagem'
            required
          />
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-darkbrown hover:bg-darknude text-white hover:text-darkbrown font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
