import Loader from './Loader';
import React from 'react';
import { shallow } from 'enzyme';

describe('Loader', () => {
  it('should have two styled div and text', () => {
    const wrapper = shallow(
      <Loader />
    );
    expect(
      wrapper.contains(
        <div className="ui active inverted dimmer">
          <div className="ui medium centered text loader">Preparing Files...</div>
        </div>
      )
    ).toBe(true);
  });
});
