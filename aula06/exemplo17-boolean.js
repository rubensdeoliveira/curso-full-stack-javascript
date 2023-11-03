// Boolean (continuaçāo)

console.log('' || 0 || undefined || null || 3 || 4)
console.log(undefined || 0 || '' || null || 3 || 4)
console.log(undefined || 0 || '' || null || 4 || 0)
console.log(null || 0 || undefined || '' || 3 || 4)
console.log(3 || 4 || undefined || '')

console.log('' && 0 && undefined && null && 3 && 4)
console.log(undefined && 0 && '' && null && 3 && 4)
console.log(null && 0 && undefined && '' && 3 && 4)
console.log(3 && 4 && undefined && '')

console.log(Boolean(null || 0 || undefined || '' || 3 || 4))
console.log(Boolean(3 || 4 || undefined || ''))
console.log(Boolean(null && 0 && undefined && '' && 3 && 4))
console.log(Boolean(3 && 4 && undefined && ''))