export const PlayBtn = ({ className }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="80px"
      height="80px"
      viewBox="0 0 213.7 213.7"
      enableBackground="new 0 0 213.7 213.7"
      xmlSpace="preserve"
      className="absolute w-14 md:w-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {/* Triangle */}
      <polygon
        className="stroke-white translate-y-0 transition-all duration-700 ease-in-out drop-shadow-xl hover:stroke-yellow-500"
        style={{ strokeDasharray: 240, strokeDashoffset: 480 }}
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="73.5,62.5 148.5,105.8 73.5,149.1 "
      ></polygon>
      {/* Circle */}
      <circle
        className="stroke-white transition-all duration-700 ease-in-out drop-shadow-xl hover:stroke-yellow-500 "
        style={{ strokeDasharray: 650, strokeDashoffset: 1300 }}
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        cx="106.8"
        cy="106.8"
        r="103.3"
      ></circle>
    </svg>
  );
};
