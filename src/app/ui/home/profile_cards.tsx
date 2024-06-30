import Icon from "./social_media_icon";

interface Props {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  linkedin: string;
  email: string;
}

const profile_cards = ({
  image,
  imageAlt,
  name,
  description,
  linkedin,
  email,
}: Props) => {
  return (
    <div className="card bg-concrete-gray shadow-xl w-full hover:scale-110 duration-100">
      <figure>
        <img src={image} alt={imageAlt} />
      </figure>
      <div className="card-body pb-4">
        <h2 className="card-title mx-auto">{name}</h2>
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

export default profile_cards;
