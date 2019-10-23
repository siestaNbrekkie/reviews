import App from '../client/App.jsx';
import React from 'react';
import { shallow } from 'enzyme';

describe('First react component unit test', () => {
  describe('rendering to the DOM test', () => {
    test ('App renders to the DOM', (done) => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBe(true);
      done();
    })
  })
})