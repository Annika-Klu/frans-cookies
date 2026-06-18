import { CookieViewModel } from "@/types/cookies";
import { currency } from "@/utils";

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
  const showIsNewBadge = showDetails && cookie.isNew;
  const showDescription = showDetails && cookie.description;
  return (
    <div className={`card ${outline ? "card-outline" : ""} ${size}`}>
      <div className="first-row">
        <img src={cookie.image} alt={cookie.name} />
        {showIsNewBadge && (
          <span className="new">NEU</span>
        )}

        <p className={`name ${showDetails ? "playful" : ""}`}>
          {cookie.name}
        </p>
      </div>

        {showDetails && 
          <p className="price">{currency(cookie.price)}</p>
        }

      {showDescription && (
        <p className="desc">{cookie.description}</p>
      )}
    </div>
  );
}