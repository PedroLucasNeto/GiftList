import coupleImg from '/assets/images/image.png';
const OurStory = () => {
  return (
    <div className='bg-lightnude py-12'>
      <div className='container mx-auto'>
        <h2 className='text-5xl text-center mb-8 font-hurricane font-normal'>
          Nossa História
        </h2>
        <div className='flex flex-col justify-center items-center '>
          <div
            className=' w-6/12 h-[350px] bg-cover'
            style={{ backgroundImage: `url(${coupleImg})` }}
          >
            {/* <img
              src="/assets/images/image.png"
              alt="Our Story"
              className="w-4/12 h-auto rounded-lg shadow-md"
            /> */}
          </div>
          <div className='text-center mt-8 flex justify-center '>
            <p className='w-8/12 text-left text-lg text-darkblue mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              iste, molestias odio illum expedita quas incidunt, dolore, enim
              fugiat voluptatum fuga consequatur laboriosam quod saepe tempore
              sint nostrum quisquam cum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
