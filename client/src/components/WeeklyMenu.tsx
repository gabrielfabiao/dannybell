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

type TextChild = {
  text: string;
};

type TextBlock = {
  children: TextChild[];
};

function extractText(blocks: TextBlock[]): string {
  return blocks
    .map((block) => block.children.map((child) => child.text).join(""))
    .join("\n");
}

const WeeklyMenu = ({ description, price }: WeeklyMenuProps) => {
  const [menuText, setMenuText] = useState<string>("");

  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getFullYear()).slice(-2)}`;

  const weekday = new Date().getDay();
  let fieldName = weekdayMap[weekday];

  if ( weekday <= 5 ) {
    fieldName = weekdayMap[weekday] + "-feira"
  }

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
    <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/8 bg-[rgba(221,221,221,0.8)] rounded-xl p-4 shadow-2xl max-w-lg w-90 text-left justify-center lg:right-0 lg:translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 whitespace-pre-wrap">
      <h2 className="text-2xl text-black opacity-90 tracking-wide">
        Menu do Dia
      </h2>
      <p className="mb-4 text-black text-sm font-normal capitalize">
         {fieldName} <span>({formattedDate})</span>
      </p>
      <p className="list-none leading-tight text-black font-light text-md">
        {menuText || "Nenhum menu disponível."}
      </p>
      <p className="mt-4 text-xs text-black font-normal">{description}</p>
      <div className="w-15 h-15 rounded-xl absolute bg-[#49170c] opacity-80 flex items-center justify-center top-4 right-4">
        <p className="text-2xl text-white tracking-wider font-[garamond]">{price}€</p>
      </div>
    </div>
  );
};

export default WeeklyMenu;
