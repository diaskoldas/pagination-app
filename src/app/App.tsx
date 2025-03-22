import {
  Pagination,
  usePagination,
  usePaginationByClass,
} from "../shared/ui/pagination";
import styles from "./App.module.scss";
function App() {
  const paginationController1 = usePagination({
    initialPage: 1,
    totalPages: 10,
  });
  const paginationController2 = usePagination({
    initialPage: 1,
    totalPages: 10,
    isCyclic: true,
    nextPagesStepCount: 3,
    prevPagesStepCount: 3,
  });
  const paginationController3 = usePaginationByClass({
    initialPage: 1,
    totalPages: 10,
  });
  const paginationController4 = usePaginationByClass({
    initialPage: 1,
    totalPages: 10,
    isCyclic: true,
    nextPagesStepCount: 3,
    prevPagesStepCount: 3,
  });
  return (
    <div className={styles.wrapper}>
      <h2>Пагинация - базовая</h2>
      <Pagination controller={paginationController1} />
      <h2>Пагинация - цикличная + шаг переключение по 3 страницы</h2>
      <Pagination controller={paginationController2} />
      <h2>Пагинация - базовая (by class)</h2>
      <Pagination controller={paginationController3} />
      <h2>Пагинация - цикличная + шаг переключение по 3 страницы (by class)</h2>
      <Pagination controller={paginationController4} />
    </div>
  );
}

export default App;
