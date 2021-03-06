import { executeWithOptions } from '../src/cli';

describe('executeWithOptions', () => {
  it('execute the correct results when using file', async () => {
    const result = await executeWithOptions({
      file: '../../dev-test/githunt/schema.json',
      template: 'ts',
    });

    expect(result.length).toBe(1);
  });

  it('execute the correct results when using custom config file', async () => {
    const result = await executeWithOptions({
      file: '../../dev-test/githunt/schema.json',
      template: 'ts',
      config: '../../dev-test/config/gql-gen.json',
    });

    expect(result[0].content).toContain('Generated in');
  });
});
