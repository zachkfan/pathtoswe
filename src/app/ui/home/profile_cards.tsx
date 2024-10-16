import Icon from "./social_media_icon";
import Image from "next/image";

interface Props {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  linkedin: string;
  email: string;
}

const ProfileCards = ({
  image,
  imageAlt,
  name,
  description,
  linkedin,
  email,
}: Props) => {
  return (
    <div className="card bg-concrete-gray shadow-xl w-full hover:scale-105 duration-100 text-black-gray">
      <figure className="w-full">
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={800}
          className="w-full h-auto"
        />
      </figure>
      <div className="card-body pb-4">
        <h2 className="card-title mx-auto font-bold text-sm sm:text-base md:text-lg">
          {name}
        </h2>
        <p className="font-serif font-light text-xs sm:text-sm md:text-base">
          {description}
        </p>
        <div className="card-actions flex justify-end gap-2 mt-4">
          <Icon
            image="/linkedin.svg"
            imageAlt="Linkedin Icon"
            href={linkedin}
          />
          <Icon
            image="/email.svg"
            imageAlt="Email Icon"
            href={`mailto:${email}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
