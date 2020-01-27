import { expect } from 'chai';
import * as preact from 'preact';
import { mount } from 'enzyme';

import Counter from '../src/Counter';

describe('Counter', () => {
  it('should display initial count', () => {
    const wrapper = mount(<Counter initialCount={5} />);
    expect(wrapper.find('input').prop('value')).to.equal(5);
  });

  it('should render a button', () => {
    const wrapper = mount(<Counter initialCount={5} />);

    expect(
      wrapper.find('button').matchesElement(<button>Increment</button>)
    ).to.equal(true);
  });

  it('should increment after "Increment" button is clicked', () => {
    const wrapper = mount(<Counter initialCount={5} />);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('input').prop('value')).to.equal(6);
  });

  it('should change value by input', () => {
    const wrapper = mount(<Counter initialCount={5} />);

    wrapper.find('input').simulate('input', { target: { value: '1' } });

    expect(wrapper.find('input').prop('value')).to.equal(1);
  });
});
