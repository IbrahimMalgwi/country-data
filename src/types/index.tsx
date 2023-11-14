export type Order = "asc" | "desc";

// export interface EnhancedTableToolbarProps {
//     numSelected: number;
// }

// export interface EnhancedTableProps {
//     numSelected: number;
//     onRequestSort: (
//       event: React.MouseEvent<unknown>,
//       property: keyof Country
//     ) => void;
//     onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     order: Order;
//     orderBy: string;
//     rowCount: number;
// }

// export interface HeadCell {
//     disablePadding: boolean;
//     id: keyof Country;
//     label: string;
//     numeric: boolean;
// }

export interface Country {
    id: string;
    code: string;
    name: string;
    nameUn: string;
    continent: string;
    hasStates: boolean;
}
    