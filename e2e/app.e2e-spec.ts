import { DialogTestPage } from './app.po';

describe('dialog-test App', () => {
  let page: DialogTestPage;

  beforeEach(() => {
    page = new DialogTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
