interface CardProps {
  title: string;
  location?: string;
  email?: string;
  phone?: string;
  socialMedia?: string;
  profession?: string;
}

export const Card = ({
  title,
  location,
  email,
  phone,
  socialMedia,
  profession,
}: CardProps) => {
  return (
    <>
      <div className='bg-gray-50 flex-col p-8 rounded-xl w-80 h-44 shadow-lg shadow-gray-500/50 text-left hover:bg-gray-100 '>
        <h6 className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-xl pb-4'>
          {title}
        </h6>
        <p className='text-gray-900 font-semibold'>{profession}</p>
        <a href='#' className='text-blue-700 font-semibold pb-4'>
          {email}
        </a>
        <p className='text-gray-900'>{phone}</p>
        <p className='text-gray-900'>{location}</p>
        <p className='text-gray-900'>{socialMedia}</p>
      </div>
    </>
  );
};
