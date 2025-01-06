import Image from "next/image";

interface ProfileProps {
  index: number;
  name: string;
  position: string;
  major: string;
  image: string;
}

const Profile: React.FC<ProfileProps> = ({
  index,
  name,
  position,
  major,
  image,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className={`motion-blur-in motion-delay-${index * 100} bg-gray-100`}
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-md">{name}</h2>
        <p className="text-md text-gray-500">{position}</p>
        <p className="text-sm text-gray-500">{major}</p>
      </div>
    </div>
  );
};

export default Profile;
