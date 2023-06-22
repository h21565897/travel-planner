import React, { useState } from "react";
import { Card } from "antd";

type Props = {
  cardOptions: { key: string; title: string; description: string }[];
  setOption: React.Dispatch<React.SetStateAction<string[]>>;
};
function Page({ cardOptions, setOption }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    cardOptions &&
    cardOptions.map((cardOption, index) => (
      <div
        key={cardOption.key}
        className={`my-4 border-2   ${
          selected.includes(cardOption.key)
            ? "border-red-300"
            : "border-gray-300"
        }`}
        onClick={() => {
          setSelected((prevSelected) => {
            if (!prevSelected.includes(cardOption.key)) {
              return [...prevSelected, cardOption.key];
            } else {
              return prevSelected.filter((item) => item !== cardOption.key);
            }
          });
          setOption(selected);
        }}
      >
        <Card className="rounded-lg prose-base" hoverable>
          <h2>{cardOption.title}</h2>
          <h3>{cardOption.description}</h3>
        </Card>
      </div>
    ))
  );
}

export default Page;
