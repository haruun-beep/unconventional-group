// Shared body scroll lock with reference counting so multiple components
// (intro loader, mobile nav, chat) can lock/unlock without clobbering each
// other's state. Only the first lock stores/sets overflow; only the last
// unlock restores it.

let count = 0;
let previous = "";

export function lockScroll() {
  if (typeof document === "undefined") return;
  if (count === 0) {
    previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  count += 1;
}

export function unlockScroll() {
  if (typeof document === "undefined") return;
  if (count === 0) return;
  count -= 1;
  if (count === 0) {
    document.body.style.overflow = previous;
  }
}
