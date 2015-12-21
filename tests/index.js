import parsed from './fixtures';
import expected from './expectations';
import { expect } from 'chai';

describe('Markdown Parser', () => {
  it('parsed deep-matches expectation', () => {
    expect(expected).to.deep.equal(parsed);
  });
});