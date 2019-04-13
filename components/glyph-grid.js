/**
 * Grid of glyphs, displaying each with the relevant substitutions
 */

import css from './glyph-grid.scss'
import GlyphPreview from './glyph-preview'
import * as cx from 'classnames'

export default function GlyphGrid({ substitutions, meta, active, children, onSubstitutionSelect, onSubstitutionSwap }) {
  const symbols = []
  const gridcells = []
  let foundActive = false
  let hasActive = active != null

  if (substitutions.length === 0 && !active) {
    return (
      <div className={css.grid}>
        <button className={cx(css.emptyset)} onClick={() => onSubstitutionSelect()}>
        Click here to get started
        </button>
      </div>
    )
  }

  function Btn({children, isActive, onClick}) {
    return (
      <button className={cx(css.container, { [css.activecell]: isActive, [css.disabled]: hasActive })} disabled={hasActive} onClick={onClick}>
        {children}
      </button>
    )
  }

  function onDragStart(e) {
    e.dataTransfer.setData('number', parseInt(e.currentTarget.attributes['data-index'].value))
  }

  function onDragOver(e) {
    if (e.currentTarget.attributes['data-index'].value) {
      e.preventDefault()
    }
  }

  function onDrop(e) {
    const self = parseInt(e.currentTarget.attributes['data-index'].value)
    const other = e.dataTransfer.getData('number')
    if (self !== other) {
      onSubstitutionSwap(self, other)
    }
  }

  for (let i = 0; i < substitutions.length; i++) {
    const sub = substitutions[i]
    const { replace, glyph } = sub
    const key = replace.join('/')
    const isActive = active === sub
    const button = (
      <Btn isActive={isActive} onClick={() => onSubstitutionSelect(sub)}>
        <div className={css.label}>{key}</div>
        <GlyphPreview className={css.preview} {...glyph} {...meta}/>
      </Btn>
    )
    foundActive = foundActive || isActive
    gridcells.push({
      key,
      index: i,
      button,
      isActive
    })
  }

  gridcells.push({
    key: 'add',
    button: (<Btn onClick={() => onSubstitutionSelect()}>+</Btn>),
    isActive: hasActive && !foundActive
  })

  for (const { key, index, button, isActive } of gridcells) {
    const className = cx(css.gridcell, {
      [css.inactive]: !isActive && hasActive
    })
    symbols.push(
      <div
        className={className}
        key={key}
        data-index={index}
        draggable={!hasActive && index != null}
        onDragStart={onDragStart}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {button}
        {isActive && (
          <div className={css.detailsspacer}>
            <div className={css.details}>
              {children}
            </div>
          </div>
        )}
      </div>
    )
  }
  
  return (
    <div className={css.grid}>
      {symbols}
    </div>
  )
}