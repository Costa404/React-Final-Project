// UseHandleOnMove.ts
export const UseHandleOnMove = (
  e: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>,
  mouseDown: number,
  prevPercentage: number,
  setPercentage: (percentage: number) => void
) => {
  if (mouseDown === 0) return;

  const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX;
  const mouseDelta = mouseDown - clientX;
  const maxDelta = window.innerWidth / 2;
  const percentageChange = (mouseDelta / maxDelta) * -100;

  const nextPercentageUnconstrained = prevPercentage + percentageChange;
  const nextPercentage = Math.max(
    Math.min(nextPercentageUnconstrained, 0),
    -100
  );

  setPercentage(nextPercentage);
};
