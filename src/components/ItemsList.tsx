import { ReactElement } from "react"

interface ItemsListProps {
  items: string[]
}
export default function ItemsList({ items }: ItemsListProps): ReactElement {

  const renderItems = (): ReactElement[] => {
    return items.map((item: string) => {
      return <li key={item}>{item}</li>;
    });
  };

  return (
    <ul className="flex flex-col gap-2">
      {renderItems()}
    </ul>
  )
}