/**
 * Encodes form data for application/x-www-form-urlencoded submission
 * @param {Object} data - The form data object to encode
 * @returns {string} URL-encoded string of key=value pairs
 */
export const encodeFormData = (data) => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}
