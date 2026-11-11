import { Injectable } from '@angular/core';
import { DefaultUrlSerializer, UrlTree } from '@angular/router';

// De momento no funciona
@Injectable()
export class CustomUrlSerializerService extends DefaultUrlSerializer {
  constructor() {
    super();
   }

  public override parse(url: string): UrlTree {
    const urlSplit = url.split('?');
    const queryParams = urlSplit[1];
    let newUrl = this.replacer(decodeURI(urlSplit[0]));

    if (queryParams) {
      newUrl += `?${decodeURI(queryParams)}`;
    }

    return super.parse(newUrl);
  }

  public override serialize(tree: UrlTree): string {
    return super.serialize(tree);
  }

  private replacer(str: string): string {
    return str.replace(/[()]/g, (c) => '%' + c.charCodeAt(0).toString(16));
  }
}