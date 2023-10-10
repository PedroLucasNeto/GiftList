interface CardProps {
  title: string;
  location?: string;
  email?: string;
  phone?: string;
  socialMidia?: string;
}

export const Card = ({
  title,
  location,
  email,
  phone,
  socialMidia,
}: CardProps) => {
  return (
    <>
      <div className='bg-gray-100 flex-col p-10 rounded-xl w-80 h-44 shadow-lg shadow-gray-500/50 hover:scale-105 ease-in-out duration-300'>
        <h6 className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-xl pb-4'>
          {title}
        </h6>
        <a href='#' className='text-blue-700 font-semibold pb-4'>
          {email}
        </a>
        <p className='text-gray-900'>{phone}</p>
        <p className='text-gray-900'>{location}</p>
        <p className='text-gray-900'>{socialMidia}</p>
      </div>
    </>
  );
};
