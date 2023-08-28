import axios from 'axios';
import cheerio from 'cheerio';

export async function scrapeBookFromGutenberg(bookTitle: string, author: string): Promise<string> {
  // Replace spaces with '+' for the URL
  const formattedTitle = bookTitle.replace(/ /g, '+');
  const formattedAuthor = author.replace(/ /g, '+');

  // Get the book page
  const response = await axios.get(
    `https://www.gutenberg.org/ebooks/search/?query=${formattedTitle}+by+${formattedAuthor}`,
  );
  const $ = cheerio.load(response.data);

  // Get the book URL
  const bookUrl = $('li.booklink a').attr('href');

  // Get the book text
  const bookResponse = await axios.get(`https://www.gutenberg.org${bookUrl}`);
  const book$ = cheerio.load(bookResponse.data);

  // Convert the book text to markdown
  const bookMarkdown = book$('body').text();

  return bookMarkdown;
}
