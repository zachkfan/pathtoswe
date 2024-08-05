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
    <div className="card bg-concrete-gray shadow-xl w-full hover:scale-110 duration-100 text-black-gray">
      <figure>
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={800}
          className={"size-full"}
        />
      </figure>
      <div className="card-body pb-4">
        <h2 className="card-title mx-auto font-bold">{name}</h2>
        <p className="font-serif font-light">{description}</p>
        <div className="card-actions justify-end">
          <Icon
            image={"/linkedin.svg"}
            imageAlt={"Linkedin Icon"}
            href={linkedin}
          ></Icon>
          <Icon
            image={"/email.svg"}
            imageAlt={"Email Icon"}
            href={"mailto:" + email}
          ></Icon>
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
