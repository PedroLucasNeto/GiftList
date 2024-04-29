import { images } from './images';

const Gallery = () => {
  const chunkArray = (array: any, size: any) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedImages = chunkArray(images, 3);

  return (
    <section id='gallery' className='bg-lightnude'>
      <div className='grid grid-cols-2 gap-4 mx-10 xl:mx-40'>
        {chunkedImages.map((chunk, index) => (
          <div key={index} className='grid gap-4'>
            {chunk.map((image: any, idx: number) => (
              <div key={idx}>
                <img
                  src={image.link}
                  alt={image.alt}
                  className={image.className}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
