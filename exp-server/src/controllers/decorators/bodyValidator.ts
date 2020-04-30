import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function bodyValidator(...keys: string[]) {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    Reflect.defineMetadata(MetadataKeys.VALIDATOR, keys, target, key);
  };
}
