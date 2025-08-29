"use client";

import React, { useState } from "react";
import Container from "../layout/Container";

const Pagination = () => {
  const totalPages = 5; // Replace with dynamic value if needed
  const [currentPage, setCurrentPage] = useState(1);

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="">
      <Container width>
        <section className="flex items-center gap-2 mt-10 justify-center">
          {/* Previous Button */}
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-[var(--border)] rounded disabled:opacity-50"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  currentPage === page
                    ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                    : "border-[var(--border)]"
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-[var(--border)] rounded disabled:opacity-50"
          >
            Next
          </button>
        </section>
      </Container>
    </section>
  );
};

export default Pagination;
