import { ContainerProvider, ParentSize, ReferenceLineMap, ResizingHandle } from './types';
export declare const IDENTITY: unique symbol;
export declare function getElSize(el: Element): {
    width: number;
    height: number;
};
export declare function filterHandles(handles: ResizingHandle[]): any[];
export declare function getId(): string;
export declare function getReferenceLineMap(containerProvider: ContainerProvider, parentSize: ParentSize, id?: string): ReferenceLineMap;
