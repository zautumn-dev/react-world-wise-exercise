export function asyncHandler(promise) {
  return promise.then(r => [null, r]).catch(e => [e, null])
}

export const formatDate = date =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date))

// 国家转换 emoji
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())

  return String.fromCodePoint(...codePoints)
}
