import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, link }) => (
  <div className="card mb-4 h-100 rounded-4">
    <Image
      src={image}
      className="card-img-top rounded-4"
      alt={title}
      width={400}
      height={200} // Adjust this height as needed to fit within 50%
      style={{ objectFit: "cover", height: "50%" }}
    />

    <div
      className="card-body d-flex flex-column justify-content-between"
      style={{ height: "50%" }}
    >
      <h5 className="card-title primary-text-color text-center fw-bold fs-3">
        {title}
      </h5>
      <Link
        href={link}
        passHref
        className="text-decoration-underline primary-text-color fw-bold"
      >
        Discover Alakeys
      </Link>
    </div>
  </div>
);

export default Card;
