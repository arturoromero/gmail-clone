import { removeHtmlTags } from "./htmlcleaner";

describe('HTML CLEANER', ()=> {
  it('should clean html tags', ()=>{
    const rawHtml = "<p>testing</p>"
    const result = removeHtmlTags(rawHtml);
    expect(result).toBe("testing");
    expect(result).not.toBe("<p>testing</p>");
  });
});

