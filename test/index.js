import parsed from './fixtures/fixture';
import expected from './fixtures/expected';
import { expect } from 'chai';

describe('Markdown Parser', () => {
  it('parsed deep-matches expectation', () => {
    expect(expected).to.deep.equal(parsed);
  });
});