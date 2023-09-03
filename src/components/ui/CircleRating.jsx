import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircleRating({ rating }) {
  return (
    <CircularProgressbar
      value={rating}
      maxValue={10}
      minValue={0}
      text={`${rating * 10}%`}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: "#202121",
        textColor: "#fff",
        pathColor: rating < 4 ? "red" : rating < 7 ? "#eab308e6" : "green",
        trailColor: "transparent",
      })}
    />
  );
}
