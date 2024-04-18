const OurStory = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 font-hurricane">
          Nossa História
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/assets/images/image.png"
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="p-4">
            <p className="text-lg text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              justo quis metus cursus auctor. Nullam ut magna pulvinar, tempus
              ipsum id, volutpat risus. Donec sodales ligula eget magna
              tincidunt mollis.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Vivamus at justo sit amet sapien ultrices varius. Morbi quis urna
              vitae justo vehicula pharetra. Nam fermentum turpis vel
              ullamcorper tempus.
            </p>
            <p className="text-lg text-gray-700">
              Phasellus maximus velit non tortor venenatis, vel lobortis ante
              vehicula. Vestibulum vehicula felis sit amet tortor cursus, eget
              posuere urna luctus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
