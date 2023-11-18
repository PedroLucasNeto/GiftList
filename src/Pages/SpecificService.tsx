interface SpecificServiceProps {
  title: string;
  content: string;
}

export const SpecificService = ({ title, content }: SpecificServiceProps) => {
  return (
    <div className="flex justify-center">
      <div className="text-justify min-h-full px-6 w-full lg:px-8 lg:max-w-1/2 xl:max-w-1/2 2xl:max-w-1/3 self-center my-12">
        <h2 className="mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
