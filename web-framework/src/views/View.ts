import { Modal } from '../models/Modal';

export abstract class View<T, K extends Modal<T>> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public modal: K) {
    this.bindModal();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModal(): void {
    this.modal.on('change', () => this.render());
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment
        .querySelectorAll(selector)
        .forEach((el) => el.addEventListener(eventName, eventsMap[eventKey]));
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();

    this.parent.append(templateElement.content);
  }
}
