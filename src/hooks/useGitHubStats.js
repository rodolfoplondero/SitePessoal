import { useEffect, useState } from 'react'

// Written weekly by a workflow in the profile repository. Reading the file
// directly keeps this page off the GitHub API, which would otherwise burn the
// visitor's 60 unauthenticated requests per hour on every page load.
const FEED_URL =
  'https://raw.githubusercontent.com/rodolfoplondero/rodolfoplondero/main/assets/stats.json'

export default function useGitHubStats(url = FEED_URL) {
  const [state, setState] = useState({ status: 'loading', data: null })

  useEffect(() => {
    const controller = new AbortController()

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Stats request failed: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!data?.languages?.length) throw new Error('Stats feed is empty')
        setState({ status: 'ready', data })
      })
      .catch((error) => {
        if (error.name === 'AbortError') return
        setState({ status: 'error', data: null })
      })

    return () => controller.abort()
  }, [url])

  return state
}
