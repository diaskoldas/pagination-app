import { useRef, useState, useEffect } from "react";
import {
  PaginationControllerProps,
  PaginationControllerInterface,
} from "./types";
import { PaginationController } from "./PaginationController";

export const usePaginationByClass = (
  props: PaginationControllerProps
): PaginationControllerInterface => {
  const controller = useRef(new PaginationController(props));
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const unsubscribe = controller.current.subscribe(() => {
      forceUpdate({});
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    controller.current.updateOptions({
      totalPages: props.totalPages,
      initialPage: props.initialPage,
      isCyclic: props.isCyclic,
      nextPagesStepCount: props.nextPagesStepCount,
      prevPagesStepCount: props.prevPagesStepCount,
    });
  }, [
    props.totalPages,
    props.initialPage,
    props.isCyclic,
    props.nextPagesStepCount,
    props.prevPagesStepCount,
  ]);

  return {
    currentPage: controller.current.currentPage,
    totalPages: controller.current.totalPages,
    setCurrentPage: (page: number) => controller.current.setCurrentPage(page),
    goToNextPage: () => controller.current.goToNextPage(),
    goToPrevPage: () => controller.current.goToPrevPage(),
    goToNextPages: props.nextPagesStepCount
      ? () => controller.current.goToNextPages()
      : undefined,
    goToPrevPages: props.prevPagesStepCount
      ? () => controller.current.goToPrevPages()
      : undefined,
  };
};
