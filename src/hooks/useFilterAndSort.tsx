import { SnapshotByProduct } from "src/types/index";
import { useState, useMemo } from "react";

const useFilterAndSort = (items: SnapshotByProduct[]) => {
  const [filter, setFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const filteredAndSortedItems = useMemo(() => {
    const filteredItems = items.filter(
      (item) =>
        item.fixedIncome.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.fixedIncome.bondType.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedItems = filteredItems.sort((a, b) => {
      switch (sortBy) {
        case "valueApplied":
          return b.position.valueApplied - a.position.valueApplied;
        case "equity":
          return b.position.equity - a.position.equity;
        case "dueDate":
          return (
            new Date(a.due.date).getTime() - new Date(b.due.date).getTime()
          );
        default:
          return 0;
      }
    });

    return sortedItems;
  }, [items, filter, sortBy]);

  return { filteredAndSortedItems, setFilter, setSortBy };
};

export default useFilterAndSort;
