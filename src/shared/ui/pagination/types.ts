export interface PaginationControllerProps {
  initialPage: number;
  totalPages: number;
  isCyclic?: boolean;
  nextPagesStepCount?: number;
  prevPagesStepCount?: number;
}

export interface PaginationControllerInterface {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  goToNextPages: (() => void) | undefined;
  goToPrevPages: (() => void) | undefined;
}
