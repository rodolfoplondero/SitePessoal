export function AutomationGridIllustration(props) {
  const cols = 6
  const rows = 4
  const cell = 28
  const gap = 8
  const width = cols * cell + (cols - 1) * gap
  const height = rows * cell + (rows - 1) * gap
  const offsetX = (320 - width) / 2
  const offsetY = (180 - height) / 2

  const cells = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const state = (row + col) % 3
      cells.push({
        key: `${row}-${col}`,
        x: offsetX + col * (cell + gap),
        y: offsetY + row * (cell + gap),
        state,
      })
    }
  }

  return (
    <svg viewBox="0 0 320 180" className="project-illustration" aria-hidden="true" {...props}>
      {cells.map(({ key, x, y, state }) => (
        <rect
          key={key}
          x={x}
          y={y}
          width={cell}
          height={cell}
          rx={4}
          className={state === 0 ? 'pi-cell pi-cell--idle' : 'pi-cell pi-cell--fill'}
          style={{ opacity: state === 0 ? 1 : state === 1 ? 0.35 : 0.9 }}
        />
      ))}
    </svg>
  )
}

export function IntegrationHubIllustration(props) {
  const hub = { x: 160, y: 90 }
  const nodes = [
    { x: 160, y: 34 },
    { x: 270, y: 90 },
    { x: 160, y: 146 },
    { x: 50, y: 90 },
  ]
  const nodeSize = 24

  return (
    <svg viewBox="0 0 320 180" className="project-illustration" aria-hidden="true" {...props}>
      {nodes.map((node, i) => (
        <line
          key={`line-${i}`}
          x1={hub.x}
          y1={hub.y}
          x2={node.x}
          y2={node.y}
          className="pi-line"
        />
      ))}
      <circle cx={hub.x} cy={hub.y} r={18} className="pi-hub" />
      {nodes.map((node, i) => (
        <rect
          key={`node-${i}`}
          x={node.x - nodeSize / 2}
          y={node.y - nodeSize / 2}
          width={nodeSize}
          height={nodeSize}
          rx={5}
          className="pi-node"
        />
      ))}
    </svg>
  )
}

export function ComponentTreeIllustration(props) {
  const root = { x: 160, y: 24, width: 56, height: 26 }
  const branchY = 90
  const children = [
    { x: 40, y: 130, width: 64, height: 26 },
    { x: 128, y: 130, width: 64, height: 26 },
    { x: 216, y: 130, width: 64, height: 26 },
  ]
  const rootCenterX = root.x + root.width / 2
  const rootBottomY = root.y + root.height

  return (
    <svg viewBox="0 0 320 180" className="project-illustration" aria-hidden="true" {...props}>
      <line x1={rootCenterX} y1={rootBottomY} x2={rootCenterX} y2={branchY} className="pi-line" />
      <line
        x1={children[0].x + children[0].width / 2}
        y1={branchY}
        x2={children[2].x + children[2].width / 2}
        y2={branchY}
        className="pi-line"
      />
      {children.map((child, i) => {
        const childCenterX = child.x + child.width / 2
        return (
          <line
            key={`drop-${i}`}
            x1={childCenterX}
            y1={branchY}
            x2={childCenterX}
            y2={child.y}
            className="pi-line"
          />
        )
      })}
      <rect x={root.x} y={root.y} width={root.width} height={root.height} rx={5} className="pi-hub" />
      {children.map((child, i) => (
        <rect
          key={`child-${i}`}
          x={child.x}
          y={child.y}
          width={child.width}
          height={child.height}
          rx={5}
          className="pi-node"
        />
      ))}
    </svg>
  )
}
