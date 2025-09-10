export type SortOrder = "asc" | "desc";
export type FeatFilter = "all" | "hatune" | "chisei" | "zunda";

export interface VideoSortProps {
  sortOrder: SortOrder;
  onSortChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface VideoFilterProps {
  featFilter: FeatFilter;
  onFeatChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
