import { useMemo, useState } from 'react'
import Reveal from './Reveal'
import useGitHubStats from '../hooks/useGitHubStats'
import { GitHubIcon, StarIcon } from '../icons'

const TOP_LANGUAGES = 8

// Subset of GitHub's linguist colours, matching the SVG cards in the profile
// repository so the two representations of the same data agree.
const LANGUAGE_COLOURS = {
  C: '#555555',
  'C#': '#178600',
  CSS: '#563d7c',
  Dart: '#00B4AB',
  Go: '#00ADD8',
  HTML: '#e34c26',
  Java: '#b07219',
  JavaScript: '#f1e05a',
  'Jupyter Notebook': '#DA5B0B',
  Kotlin: '#A97BFF',
  Lua: '#000080',
  MATLAB: '#e16737',
  PHP: '#4F5D95',
  PowerShell: '#012456',
  Python: '#3572A5',
  Ruby: '#701516',
  Shell: '#89e051',
  TeX: '#3D6117',
  TypeScript: '#3178c6',
  'Visual Basic .NET': '#945db7',
}

function colourFor(name) {
  if (LANGUAGE_COLOURS[name]) return LANGUAGE_COLOURS[name]
  let hue = 0
  for (let i = 0; i < name.length; i += 1) hue += name.charCodeAt(i) * (i + 1)
  return `hsl(${hue % 360}, 55%, 50%)`
}

const percent = (share) => `${(share * 100).toFixed(1)}%`

export default function Analytics() {
  const { status, data } = useGitHubStats()
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [sort, setSort] = useState('stars')

  const languages = useMemo(
    () => (data?.languages ?? []).slice(0, TOP_LANGUAGES),
    [data],
  )

  const repositories = useMemo(() => {
    const all = data?.repositories ?? []
    const filtered = selected
      ? all.filter((repo) => Object.keys(repo.languages ?? {}).includes(selected))
      : all
    const sorted = [...filtered]
    if (sort === 'stars') sorted.sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name))
    if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'recent') {
      sorted.sort((a, b) => String(b.pushed_at ?? '').localeCompare(String(a.pushed_at ?? '')))
    }
    return sorted
  }, [data, selected, sort])

  // The section is an extra, not load-bearing: if the feed is unreachable the
  // page should read exactly as it did before rather than show a broken panel.
  if (status !== 'ready') return null

  const active = hovered ?? selected
  const totals = data.profile

  return (
    <section id="analytics" className="section">
      <Reveal as="p" className="queue-tag">
        QUEUE: ANALYTICS
      </Reveal>
      <Reveal as="h2" className="section__title">
        Analytics
      </Reveal>
      <Reveal as="p" className="analytics__lead">
        Dados do meu GitHub, atualizados semanalmente. Passe o mouse na barra para ver cada
        linguagem e clique para filtrar os repositórios.
      </Reveal>

      <Reveal className="analytics">
        <ul className="analytics__totals">
          <li>
            {/* The feed only carries repositories that have code in them, so
                counting the list keeps this tile consistent with what is
                rendered below it rather than with the raw profile count. */}
            <span className="analytics__figure">{data.repositories.length}</span>
            <span className="analytics__label">repositórios</span>
          </li>
          <li>
            <span className="analytics__figure">{totals.stars}</span>
            <span className="analytics__label">estrelas</span>
          </li>
          <li>
            <span className="analytics__figure">{totals.followers}</span>
            <span className="analytics__label">seguidores</span>
          </li>
          <li>
            <span className="analytics__figure">{data.languages.length}</span>
            <span className="analytics__label">linguagens</span>
          </li>
        </ul>

        <div className="analytics__bar" role="img" aria-label="Distribuição de linguagens">
          {languages.map((language) => (
            <button
              key={language.name}
              type="button"
              className={`analytics__segment ${
                selected === language.name ? 'is-selected' : ''
              } ${active && active !== language.name ? 'is-dimmed' : ''}`}
              style={{
                width: percent(language.share),
                background: colourFor(language.name),
              }}
              onMouseEnter={() => setHovered(language.name)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(language.name)}
              onBlur={() => setHovered(null)}
              onClick={() =>
                setSelected((current) => (current === language.name ? null : language.name))
              }
              aria-pressed={selected === language.name}
              aria-label={`${language.name}, ${percent(language.share)}`}
            >
              <span className="analytics__tooltip" aria-hidden="true">
                {language.name} · {percent(language.share)}
              </span>
            </button>
          ))}
        </div>

        <ul className="analytics__legend">
          {languages.map((language) => (
            <li key={language.name}>
              <button
                type="button"
                className={selected === language.name ? 'is-selected' : ''}
                onMouseEnter={() => setHovered(language.name)}
                onMouseLeave={() => setHovered(null)}
                onClick={() =>
                  setSelected((current) => (current === language.name ? null : language.name))
                }
                aria-pressed={selected === language.name}
              >
                <span className="analytics__dot" style={{ background: colourFor(language.name) }} />
                {language.name}
                <span className="analytics__share">{percent(language.share)}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="analytics__controls">
          <p className="analytics__filter" aria-live="polite">
            {selected ? (
              <>
                {repositories.length} repositório{repositories.length === 1 ? '' : 's'} em{' '}
                <strong>{selected}</strong>
                <button type="button" className="analytics__clear" onClick={() => setSelected(null)}>
                  limpar filtro
                </button>
              </>
            ) : (
              `${repositories.length} repositórios públicos`
            )}
          </p>
          <label className="analytics__sort">
            ordenar por
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="stars">estrelas</option>
              <option value="recent">atualização</option>
              <option value="name">nome</option>
            </select>
          </label>
        </div>

        <ul className="analytics__repos">
          {repositories.map((repo) => {
            const main = Object.entries(repo.languages ?? {}).sort((a, b) => b[1] - a[1])[0]
            return (
              <li key={repo.name}>
                <a href={repo.url} target="_blank" rel="noreferrer">
                  <span className="analytics__repo-name">
                    <GitHubIcon className="icon" />
                    {repo.name}
                  </span>
                  {repo.description && (
                    <span className="analytics__repo-desc">{repo.description}</span>
                  )}
                  <span className="analytics__repo-meta">
                    {main && (
                      <span className="analytics__repo-lang">
                        <span
                          className="analytics__dot"
                          style={{ background: colourFor(main[0]) }}
                        />
                        {main[0]}
                      </span>
                    )}
                    {repo.stars > 0 && (
                      <span className="analytics__repo-stars">
                        <StarIcon className="icon" />
                        {repo.stars}
                      </span>
                    )}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </section>
  )
}
