"use client";
import React from "react";

import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

type Props = {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
  pageRanges: number;
};

function Pagination({
  totalItems,
  pageRanges,
  currentPage,
  totalItemsPerPage,
}: Props) {
  const totalPages = Math.ceil(totalItems / totalItemsPerPage);
  const router = useRouter();

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(pageRanges / 2));
    const endPage = Math.min(totalPages, startPage + pageRanges - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      router.push(`?page=${currentPage + 1}`);
    }
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      router.push(`?page=${page}`);
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <PaginationUI className="w-full mt-2">
      <PaginationContent>
        <PaginationPrevious
          className="cursor-pointer"
          onClick={handlePreviousClick}
        />

        {pageNumbers.map((page, index) => (
          <React.Fragment key={page}>
            {index === 0 && page > 1 && (
              <>
                <PaginationItem className="cursor-pointer">
                  <PaginationLink onClick={() => handlePageClick(1)}>
                    1
                  </PaginationLink>
                </PaginationItem>
                {page > 2 && <PaginationEllipsis />}
              </>
            )}
            <PaginationItem className="cursor-pointer">
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
            {index === pageNumbers.length - 1 && page < totalPages && (
              <>
                {page < totalPages - 1 && <PaginationEllipsis />}
                <PaginationItem className="cursor-pointer">
                  <PaginationLink onClick={() => handlePageClick(totalPages)}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
          </React.Fragment>
        ))}

        <PaginationNext className="cursor-pointer" onClick={handleNextClick} />
      </PaginationContent>
    </PaginationUI>
  );
}

export default Pagination;
