import { useSelector } from "react-redux";

export default function Card(item) {
  const { url } = useSelector((state) => state.home);
  const { id, name, title, poster_path } = item

  return (
    <div
      key={id}
      className={`carousel_item group/card w-2/5 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-52`}
    >
      <Img src={url?.poster + poster_path} alt={name || title} />
    </div>
  );
}