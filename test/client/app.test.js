import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'
import * as sinon from 'sinon'

import App from '../../client/components/App'
import * as api from '../../client/api'

App.prototype.componentDidMount = () => {}

test('<App />', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(),'Book Clubbed!')
})
