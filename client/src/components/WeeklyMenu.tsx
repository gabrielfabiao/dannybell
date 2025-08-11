// components/WeeklyMenu.tsx

import React, { useEffect, useState } from "react";
import { getWeeklyMenu } from "../data/loaders";

const weekdayMap: Record<number, string> = {
  1: "segunda",
  2: "terca",
  3: "quarta",
  4: "quinta",
  5: "sexta",
  6: "sabado",
  0: "domingo",
};

type WeeklyMenuProps = {
  menu: Array<{ text: string; description: string }>;
  date: string;
  description: string;
  price: number;
};

function extractText(blocks: any[]) {
  return blocks
    .map((block) => block.children.map((child: any) => child.text).join(""))
    .join("\n");
}

const WeeklyMenu = ({ description, price }: WeeklyMenuProps) => {
  const [menuText, setMenuText] = useState<string>("");

  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getFullYear()).slice(-2)}`;

  useEffect(() => {
    async function fetchMenu() {
      const data = await getWeeklyMenu();
      const menuItem = data?.data?.[0];

      const today = new Date().getDay();
      const fieldName = weekdayMap[today];

      const rawBlocks = menuItem?.[fieldName];
      const plainText = extractText(rawBlocks || []);

      setMenuText(plainText);
    }

    fetchMenu();
  }, []);

  return (
    <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 bg-[rgba(132,32,32,0.7)] rounded-xl p-4 shadow-lg max-w-lg w-80 text-left justify-center lg:right-0 lg:translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 whitespace-pre-wrap">
      <h2 className="text-xl text-white">
        Menu do Dia
      </h2>
      <p className="mb-4 text-[#ffcfcfff] text-xs font-normal">
        {formattedDate}
      </p>
      <p className="list-none leading-tight text-white font-extralight">
        {menuText || "Nenhum menu disponível."}
      </p>
      <p className="mt-4 text-xs text-black font-normal">{description}</p>
      <div className="w-20 h-20 rounded-full absolute bg-[rgba(132,32,32,1)] flex items-center justify-center top-0 -translate-y-1/4 right-0 translate-x-1/4">
        <p className="text-3xl text-white tracking-wider">{price}€</p>
      </div>
    </div>
  );
};

export default WeeklyMenu;
