import { CookieViewModel } from "@/types/cookies";

type Props = {
  cookie: CookieViewModel;
  showDetails?: boolean;
  outline?: boolean;
  size?: "sm" | "md" | "lg";
};

export default function CookieCard({
  cookie,
  showDetails = false,
  outline = false,
  size = "md",
}: Props) {
  const showDescription = showDetails && cookie.description;
  return (
    <div className={`card ${outline ? "card-outline" : ""} ${size}`}>
      <img src={cookie.image} alt={cookie.name} />

      <p className={`name ${showDetails ? "playful" : ""}`}>{cookie.name}</p>

      {showDetails && <p className="price">{cookie.price}€</p>}

      {showDescription && (
        <p className="desc">{cookie.description}</p>
      )}
    </div>
  );
}