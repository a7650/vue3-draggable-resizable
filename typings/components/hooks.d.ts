import { Ref } from 'vue';
import { ContainerProvider, ResizingHandle } from './types';
export declare function useState<T>(initialState: T): [Ref<T>, (value: T) => T];
export declare function initState(props: any, emit: any): {
    id: string;
    width: Ref<number>;
    height: Ref<number>;
    top: Ref<number>;
    left: Ref<number>;
    enable: Ref<boolean>;
    dragging: Ref<boolean>;
    resizing: Ref<boolean>;
    resizingHandle: Ref<ResizingHandle>;
    resizingMaxHeight: Ref<number>;
    resizingMaxWidth: Ref<number>;
    resizingMinWidth: Ref<number>;
    resizingMinHeight: Ref<number>;
    aspectRatio: import("vue").ComputedRef<number>;
    setEnable: (value: boolean) => boolean;
    setDragging: (value: boolean) => boolean;
    setResizing: (value: boolean) => boolean;
    setResizingHandle: (value: ResizingHandle) => ResizingHandle;
    setResizingMaxHeight: (value: number) => number;
    setResizingMaxWidth: (value: number) => number;
    setResizingMinWidth: (value: number) => number;
    setResizingMinHeight: (value: number) => number;
    $setWidth: (val: number) => number;
    $setHeight: (val: number) => number;
    $setTop: (val: number) => number;
    $setLeft: (val: number) => number;
};
export declare function initParent(containerRef: Ref<HTMLElement | undefined>): {
    parentWidth: Ref<number>;
    parentHeight: Ref<number>;
};
export declare function initLimitSizeAndMethods(props: any, parentSize: ReturnType<typeof initParent>, containerProps: ReturnType<typeof initState>): {
    setWidth(val: number): number;
    setHeight(val: number): number;
    setTop(val: number): number;
    setLeft(val: number): number;
    minWidth: import("vue").ComputedRef<number>;
    minHeight: import("vue").ComputedRef<number>;
    maxWidth: import("vue").ComputedRef<number>;
    maxHeight: import("vue").ComputedRef<number>;
    minLeft: import("vue").ComputedRef<number>;
    minTop: import("vue").ComputedRef<number>;
    maxLeft: import("vue").ComputedRef<number>;
    maxTop: import("vue").ComputedRef<number>;
};
export declare function initDraggableContainer(containerRef: Ref<HTMLElement | undefined>, containerProps: ReturnType<typeof initState>, limitProps: ReturnType<typeof initLimitSizeAndMethods>, draggable: Ref<boolean>, emit: any, containerProvider: ContainerProvider | null, parentSize: ReturnType<typeof initParent>): {
    containerRef: Ref<HTMLElement>;
};
export declare function initResizeHandle(containerProps: ReturnType<typeof initState>, limitProps: ReturnType<typeof initLimitSizeAndMethods>, parentSize: ReturnType<typeof initParent>, props: any, emit: any): {
    handlesFiltered: import("vue").ComputedRef<ResizingHandle[]>;
    resizeHandleDown: (e: MouseEvent, handleType: ResizingHandle) => void;
};
export declare function watchProps(props: any, limits: ReturnType<typeof initLimitSizeAndMethods>): void;
