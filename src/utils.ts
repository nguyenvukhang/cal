/**
 * useful to convert YYYY-MM-DD to [YYYY, MM, DD]
 */
export function dashedStringToNumberedArray(str: string): number[] {
  return str.split('-').map((e) => parseInt(e))
}
