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
