/**
 * Font Awesome icon helper.
 * Pass the full class string from data files, e.g. "fa-solid fa-code"
 */
export default function Icon({ name, className = "" }) {
  return <i className={`${name} ${className}`.trim()} aria-hidden="true" />;
}
