"use client";
import React, { useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const JobFilterResult = ({ totalItems, searchParams: { page, page_size } }) => {
	const page_sizes = parseInt(page_size?.toString(), 6) || 6;
	const pages = parseInt(page?.toString(), 10) || 1;
	const searchParams = useSearchParams();

	const router = useRouter();
	const pathname = usePathname();

	// Calculate the starting and ending index of jobs shown on the current page
	const start = (pages - 1) * page_sizes + 1;
	const end = Math.min(pages * page_sizes, totalItems);

	const createQueryString = useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	const handleSortChange = (event) => {
		router.push(
			pathname + "?" + createQueryString("sort", event.target.value)
		);
	};
	const handleSizeChange = (event) => {
		router.push(
			pathname + "?" + createQueryString("page_size", event.target.value)
		);
	};

	return (
		<div className="row align-items-center mb-10">
			<div className="col-md-4">
				<p className="filter-result mb-25">
					Showing{" "}
					<strong className="text-title">
						{start} - {end}
					</strong>{" "}
					of {totalItems} results
				</p>
			</div>
			<div className="col-md-4">
				<select
					onChange={handleSortChange}
					className="filter-cat fs-14 border-0 mb-25"
				>
					<option value="">Sort by (Default DESC)</option>
					<option value="asc">Oldest first</option>
				</select>
			</div>
			<div className="col-md-4">
				<select
					onChange={handleSizeChange}
					className="filter-cat fs-14 border-0 mb-25"
				>
					<option value="6">6 per page (Default)</option>
					<option value="20">20 per page</option>
					<option value="50">50 per page</option>
				</select>
			</div>
		</div>
	);
};

export default JobFilterResult;
