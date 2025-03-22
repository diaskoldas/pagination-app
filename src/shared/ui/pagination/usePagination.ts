import { useState } from "react";
import {
  PaginationControllerProps,
  PaginationControllerInterface,
} from "./types";

export const usePagination = (
  props: PaginationControllerProps
): PaginationControllerInterface => {
  const {
    initialPage = 1,
    totalPages = 1,
    isCyclic = false,
    nextPagesStepCount,
    prevPagesStepCount,
  } = props;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToNextPage = () => {
    if (isCyclic) {
      setCurrentPage((current) => (current === totalPages ? 1 : current + 1));
    } else if (currentPage < totalPages) {
      setCurrentPage((current) => current + 1);
    }
  };

  const goToPrevPage = () => {
    if (isCyclic) {
      setCurrentPage((current) => (current === 1 ? totalPages : current - 1));
    } else if (currentPage > 1) {
      setCurrentPage((current) => current - 1);
    }
  };

  const goToNextPages = nextPagesStepCount
    ? () => {
        if (isCyclic) {
          setCurrentPage(
            (current) => ((current + nextPagesStepCount - 1) % totalPages) + 1
          );
        } else if (currentPage < totalPages) {
          setCurrentPage((current) =>
            Math.min(current + nextPagesStepCount, totalPages)
          );
        }
      }
    : undefined;

  const goToPrevPages = prevPagesStepCount
    ? () => {
        if (isCyclic) {
          setCurrentPage(
            (current) =>
              ((((current - prevPagesStepCount - 1) % totalPages) +
                totalPages) %
                totalPages) +
              1
          );
        } else if (currentPage > 1) {
          setCurrentPage((current) =>
            Math.max(current - prevPagesStepCount, 1)
          );
        }
      }
    : undefined;

  return {
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
    goToNextPages,
    goToPrevPages,
    setCurrentPage,
  };
};
