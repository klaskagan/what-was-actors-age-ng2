import { WhatWasActorsAgePage } from './app.po';

describe('what-was-actors-age App', function() {
  let page: WhatWasActorsAgePage;

  beforeEach(() => {
    page = new WhatWasActorsAgePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
