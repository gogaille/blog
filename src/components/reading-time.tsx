import React from "react";

type Props = {
  text: string;
};

const ReadingTime = ({ text }: Props) => {
  return <> · {text}</>;
};

export default ReadingTime;
