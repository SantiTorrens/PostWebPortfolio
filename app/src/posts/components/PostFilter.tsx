// PostFilter.tsx
import React, { ReactElement, useState } from "react";
import { PostUser } from "../../types/user";

interface PostFilterProps {
  filterByTitle: boolean;
  filterByUser: boolean;
  selectedUserId: string;
  onSearchChange: (value: string) => void;
  onUserFilterChange: (userId: string) => void;
  onResetUserFilter: () => void;
  users: PostUser[];
}

export default function PostFilter({
  filterByTitle,
  filterByUser,
  selectedUserId,
  onSearchChange,
  onUserFilterChange,
  onResetUserFilter,
  users,
}: PostFilterProps): ReactElement {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleUserFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUserFilterChange(e.target.value);
  };

  return (
    <div className="flex flex-row justify-around w-full gap-2">
      <div className="w-1/3">
        {filterByTitle && (
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by title..."
            className="w-full p-2 mb-4 border rounded-md"
          />
        )}
      </div>
      {filterByUser && (
        <div className="flex flex-row w-1/3 gap-2">
          <select
            onChange={handleUserFilterChange}
            className={`w-2/3 p-2 mb-4 border rounded-md ${selectedUserId === "" ? "text-gray-400" : ""
              }`}
          >
            <option selected={!selectedUserId || selectedUserId === ""} disabled>
              Filter Posts By User
            </option>
            {users.map((user, index) => {
              return (
                <option key={index} className="text-white" value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
          <button className="w-1/3 p-2 mb-4" onClick={onResetUserFilter}>
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}
