import { Ref } from 'vue';
import { ResizingHandle } from './vue3-draggable-resizable';
declare type DragHandleFn = ({ x, y }: {
    x: number;
    y: number;
}) => void;
interface Params {
    containerRef: Ref<HTMLElement | undefined>;
    dragStart?: DragHandleFn;
    dragEnd?: DragHandleFn;
    dragging?: DragHandleFn;
    x?: Ref<number>;
    y?: Ref<number>;
    autoUpdate?: boolean;
    unselect?: () => void;
    enable?: Ref<boolean>;
}
export declare function useDraggableContainer(options: Params): {
    containerRef: Ref<HTMLElement>;
};
export declare function useState<T>(initialState: T): [Ref<T>, (value: T) => T];
export declare function initState(props: any, emit: any): {
    width: Ref<number>;
    height: Ref<number>;
    top: Ref<number>;
    left: Ref<number>;
    enable: Ref<boolean>;
    dragging: Ref<boolean>;
    resizing: Ref<boolean>;
    resizingHandle: Ref<ResizingHandle>;
    setEnable: (value: boolean) => boolean;
    setDragging: (value: boolean) => boolean;
    setResizing: (value: boolean) => boolean;
    setResizingHandle: (value: ResizingHandle) => ResizingHandle;
    $setWidth: (value: number) => number;
    $setHeight: (value: number) => number;
    $setTop: (value: number) => number;
    $setLeft: (value: number) => number;
};
export declare function initParent(containerRef: Ref<HTMLElement | undefined>): {
    parentWidth: Ref<number>;
    parentHeight: Ref<number>;
};
export declare function initLimitSizeAndMethods(props: any, parentSize: ReturnType<typeof initParent>, methods: ReturnType<typeof initState>): {
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
export declare function watchProps(props: any, limits: ReturnType<typeof initLimitSizeAndMethods>): void;
export declare function initResizeHandle(containerProps: ReturnType<typeof initState>, limitProps: ReturnType<typeof initLimitSizeAndMethods>, emit: any): {
    resizeHandleDrag: (e: MouseEvent) => void;
    resizeHandleUp: (e: MouseEvent) => void;
    resizeHandleDown: (e: MouseEvent, handleType: ResizingHandle) => void;
};
export {};
