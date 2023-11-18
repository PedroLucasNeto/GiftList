interface SpecificServiceProps {
  title: string;
  content: string;
}

export const SpecificService = ({ title, content }: SpecificServiceProps) => {
  return (
    <div>
      <h1 className='mb-2'>{title}</h1>
      <p>{content}</p>
    </div>
  );
};
