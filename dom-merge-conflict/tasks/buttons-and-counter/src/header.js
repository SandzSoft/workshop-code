export function Header() {
  const header = document.createElement("header");
  header.innerHTML = `
        <h1>Number Counter</h1>
        <p>A simple counter. Press increment to increase the count or decrement to decrease the count.</p>
    `;
  return header;
}
