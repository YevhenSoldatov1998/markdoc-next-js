import React, {FC} from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const showBy = 3;
const PageNavigation = ({currentPage, locale, countOfPages}) => {
  const next = currentPage + 1;
  const previous = currentPage - 1;

  const pages = Array.from({length: countOfPages}, (_, i) => i + 1);

  const halfShowBy = Math.floor(showBy / 2);

  let startPage = currentPage - halfShowBy;
  let endPage = currentPage + halfShowBy;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(showBy, countOfPages);
  }

  if (endPage > countOfPages) {
    endPage = countOfPages;
    startPage = Math.max(1, endPage - showBy + 1);
  }

  const showPages = pages.slice(startPage - 1, endPage);

  const rest = countOfPages - endPage;
  return (
    <div>
      <Pagination className='mt-20'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious disabled={previous <= 0} href={`${locale}/?page=${previous}`}/>
          </PaginationItem>

          {showPages.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink isActive={page === currentPage} href={`${locale}/?page=${page}`}>{page}</PaginationLink>
              </PaginationItem>
            )
          )}

          {rest > 0 && (
            <PaginationItem>
              <PaginationEllipsis/>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationNext
              disabled={next > countOfPages}
              href={`${locale}/?page=${next}`}/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PageNavigation;