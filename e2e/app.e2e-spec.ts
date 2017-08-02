import { MyFormsPage } from './app.po';

describe('my-forms App', () => {
  let page: MyFormsPage;

  beforeEach(() => {
    page = new MyFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
