// Decorative fireflies. All page content and navigation work without JavaScript.
const fireflies = document.querySelector('.fireflies');

if (fireflies) {
  const positions = [
    [6, 15, 21, -4], [91, 10, 25, -11], [13, 47, 28, -8],
    [84, 34, 23, -16], [4, 73, 31, -2], [95, 81, 26, -19],
    [24, 89, 30, -14], [73, 92, 24, -6], [40, 8, 29, -20],
    [63, 56, 33, -9], [28, 29, 26, -17], [81, 66, 32, -23],
    [3, 36, 27, -12], [96, 48, 24, -6], [18, 8, 30, -21],
    [88, 94, 29, -16], [48, 93, 34, -9], [70, 19, 26, -18],
    [8, 92, 31, -25], [92, 28, 28, -7],
  ];
  const fragment = document.createDocumentFragment();

  for (const [x, y, duration, delay] of positions) {
    const dot = document.createElement('i');
    dot.style.setProperty('--x', `${x}%`);
    dot.style.setProperty('--y', `${y}%`);
    dot.style.setProperty('--duration', `${duration}s`);
    dot.style.setProperty('--delay', `${delay}s`);
    fragment.append(dot);
  }

  fireflies.replaceChildren(fragment);
}
