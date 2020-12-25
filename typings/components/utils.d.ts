import { ContainerProvider, ParentSize, ResizingHandle } from './types';
export declare const IDENTITY: unique symbol;
export declare function getElSize(el: Element): {
    width: number;
    height: number;
};
export declare function addEvent<K extends keyof HTMLElementEventMap>(el: HTMLElement, event: K, handler: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any): void;
export declare function removeEvent<K extends keyof HTMLElementEventMap>(el: HTMLElement, event: K, handler: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any): void;
export declare function filterHandles(handles: ResizingHandle[]): ResizingHandle[];
export declare function getId(): string;
export declare function getReferenceLineMap(containerProvider: ContainerProvider, parentSize: ParentSize, id?: string): Record<"col" | "row", {
    [propName: number]: Record<"max" | "value" | "min", number>;
}>;
