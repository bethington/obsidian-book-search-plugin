import { scrapeBookFromGutenberg } from '../src/utils/gutenberg_scraper';

describe('scrapeBookFromGutenberg', () => {
  it('should return markdown for a known book', async () => {
    const bookTitle = 'Pride and Prejudice';
    const author = 'Jane Austen';
    const markdown = await scrapeBookFromGutenberg(bookTitle, author);
    expect(markdown).not.toBe('');
  });
});
