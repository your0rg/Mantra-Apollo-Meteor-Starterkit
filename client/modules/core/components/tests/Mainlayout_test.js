const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Component from '../Mainlayout';

describe('test', () => {
  it('should display the post title', () => {
    const el = shallow(<Component />);
    expect(el).not.to.be.null;
  });
});
