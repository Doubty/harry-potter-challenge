"use client";

import { SearchBarProps } from "../types/types";

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
    return (
        <input
            type="text"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded"
        />
    );
}
