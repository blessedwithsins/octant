import ResourceFiltersContext from 'contexts/resource-filters'
import _ from 'lodash'
import { LabelsModel } from 'models'
import React from 'react'

import './styles.scss'

interface Props {
  view: LabelsModel
}

export default function({ view: { labels } }: Props) {
  return (
    <ResourceFiltersContext.Consumer>
      {({ onLabelClick }) => (
        <div className='content-labels'>
          {_.map(labels, (value, key) => (
            <div key={key} className='content-label' onClick={onLabelClick ? () => onLabelClick(key, value) : null}>
              {key}:{value}
            </div>
          ))}
        </div>
      )}
    </ResourceFiltersContext.Consumer>
  )
}