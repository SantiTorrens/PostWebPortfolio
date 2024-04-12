import { ReactElement } from "react"

interface ItemsListProps {
  items: string[]
}
export default function ItemsList({ items }: ItemsListProps): ReactElement {

  const renderItems = (): ReactElement[] => {
    return items.map((item: string, index: number) => {
      return <li key={index}>{item}</li>;
    });
  };

  return (
    <ul className="gap-2 flex flex-col">
      {renderItems()}
    </ul>
  )
}