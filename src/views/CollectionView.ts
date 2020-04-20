import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');

    this.collection.models.forEach((model: T) => {
      const item = document.createElement('div');
      this.renderItem(model, item);
      templateElement.content.append(item);
    });

    this.parent.append(templateElement.content);
  }
}
