import {
  PaginationControllerInterface,
  PaginationControllerProps,
} from "./types";

type Observer = () => void;

export class PaginationController implements PaginationControllerInterface {
  private _currentPage: number;
  private _totalPages: number;
  private readonly isCyclic?: boolean;
  private readonly nextPagesStepCount?: number;
  private readonly prevPagesStepCount?: number;
  private observers: Set<Observer> = new Set();

  constructor(options: PaginationControllerProps) {
    this._currentPage = options.initialPage;
    this._totalPages = options.totalPages;
    this.isCyclic = options.isCyclic;
    this.nextPagesStepCount = options.nextPagesStepCount;
    this.prevPagesStepCount = options.prevPagesStepCount;
  }

  get currentPage(): number {
    return this._currentPage;
  }

  get totalPages(): number {
    return this._totalPages;
  }

  private notify(): void {
    this.observers.forEach((observer) => observer());
  }

  subscribe(observer: Observer): () => void {
    this.observers.add(observer);
    return () => this.observers.delete(observer);
  }

  setCurrentPage(page: number) {
    if (page < 1 || page > this._totalPages) return;
    this._currentPage = page;
    this.notify();
  }

  goToNextPage() {
    if (this.isCyclic) {
      this._currentPage = (this._currentPage % this._totalPages) + 1;
    } else {
      this._currentPage = Math.min(this._currentPage + 1, this._totalPages);
    }
    this.notify();
  }

  goToPrevPage() {
    if (this.isCyclic) {
      this._currentPage =
        this._currentPage === 1 ? this._totalPages : this._currentPage - 1;
    } else {
      this._currentPage = Math.max(this._currentPage - 1, 1);
    }
    this.notify();
  }

  goToNextPages() {
    if (this.nextPagesStepCount) {
      if (this.isCyclic) {
        this._currentPage =
          ((this._currentPage + this.nextPagesStepCount - 1) %
            this._totalPages) +
          1;
      } else {
        this._currentPage = Math.min(
          this._currentPage + this.nextPagesStepCount,
          this._totalPages
        );
      }
      this.notify();
    }
  }

  goToPrevPages() {
    if (this.prevPagesStepCount) {
      if (this.isCyclic) {
        this._currentPage =
          ((((this._currentPage - this.prevPagesStepCount - 1) %
            this._totalPages) +
            this._totalPages) %
            this._totalPages) +
          1;
      } else {
        this._currentPage = Math.max(
          this._currentPage - this.prevPagesStepCount,
          1
        );
      }
      this.notify();
    }
  }

  updateOptions(options: PaginationControllerProps) {
    this._totalPages = options.totalPages;
    if (this._currentPage > this._totalPages) {
      this._currentPage = this._totalPages;
    }
    this.notify();
  }
}
