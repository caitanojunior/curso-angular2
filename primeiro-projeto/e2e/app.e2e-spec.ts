import { PrimerioProjetoPage } from './app.po';

describe('primeiro-projeto App', () => {
  let page: PrimerioProjetoPage;

  beforeEach(() => {
    page = new PrimerioProjetoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
