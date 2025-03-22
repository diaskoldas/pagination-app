import styles from "./Pagination.module.scss";
import { PaginationControllerInterface } from "./types";

interface PaginationProps {
  controller: PaginationControllerInterface;
}

export const Pagination = (props: PaginationProps) => {
  const { controller } = props;
  const {
    currentPage,
    totalPages,
    setCurrentPage,
    goToNextPage,
    goToNextPages,
    goToPrevPage,
    goToPrevPages,
  } = controller;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {goToPrevPages && <button onClick={goToPrevPages}>{"<<"}</button>}
      <button onClick={goToPrevPage}>{"<"}</button>

      <div className={styles.pages}>
        {pages.map((page) => (
          <button
            key={page}
            className={`${styles.page} ${
              page === currentPage ? styles.active : ""
            }`}
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page}
          </button>
        ))}
      </div>

      <button onClick={goToNextPage}>{">"}</button>
      {goToNextPages && <button onClick={goToNextPages}>{">>"}</button>}
    </div>
  );
};
