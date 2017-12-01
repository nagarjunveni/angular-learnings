import { AngularLearningsPage } from './app.po';

describe('angular-learnings App', () => {
  let page: AngularLearningsPage;

  beforeEach(() => {
    page = new AngularLearningsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
