import { TestAppv1Page } from './app.po';

describe('test-appv1 App', function() {
  let page: TestAppv1Page;

  beforeEach(() => {
    page = new TestAppv1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
