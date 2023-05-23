import { DishesMenu } from "@/data/DishesMenu";
import { DisheMenuCard } from "./DisheMenuCard";
import { LayoutContainer, ViewContainer } from "@/styled-components";
import { NumberTable } from "@/components";

export const DishesMenuContainer = () => {
  return (
    <ViewContainer /* className="vanishIn" */>
      <NumberTable />

      <LayoutContainer>
        {DishesMenu.map((element) => (
          <DisheMenuCard key={element.id} disheData={element} />
        ))}
      </LayoutContainer>
    </ViewContainer>
  );
};
