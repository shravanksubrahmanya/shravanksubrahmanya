/**
 * Dispatches a robot:card-focus event so the FloatingRobot flies to
 * a clicked/hovered card and shows a brief message.
 *
 * @param {HTMLElement} cardEl  – the card DOM element
 * @param {string}      message – short text the robot should display
 * @param {string}      [section] – optional section id for colour matching
 */
export function focusRobotOnCard(cardEl, message, section) {
  if (!cardEl) return;
  const rect = cardEl.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Convert the card's top-center position to vw/vh percentages
  const leftPct = ((rect.left + rect.width / 2) / vw) * 100;
  const topPct = (rect.top / vh) * 100;

  // Decide which side the robot should appear on
  const isMobile = vw < 768;
  let robotLeft, robotTop;

  if (isMobile) {
    // On mobile, position robot above the card, centered
    robotLeft = Math.max(15, Math.min(85, leftPct));
    robotTop = Math.max(10, topPct - 12);
  } else {
    // On desktop, position to the side with more room
    if (leftPct > 50) {
      robotLeft = Math.max(5, leftPct - rect.width / vw * 50 - 8);
    } else {
      robotLeft = Math.min(95, leftPct + rect.width / vw * 50 + 8);
    }
    robotTop = Math.max(10, Math.min(85, topPct + (rect.height / vh) * 50));
  }

  window.dispatchEvent(
    new CustomEvent("robot:card-focus", {
      detail: {
        left: robotLeft,
        top: robotTop,
        message,
        section: section ?? null,
      },
    })
  );
}
